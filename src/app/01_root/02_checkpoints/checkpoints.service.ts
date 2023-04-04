/* Функции для работы с контрольными точками */

import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, fromEvent, interval, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IAction, IScreen, IState, THistory } from '@interfaces/helper.interface';
import { ReglamentService } from '@reglaments/reglament.service';
import { HelperService } from '@helper/helper.service';

export interface ICheckpoint {
    descriptions: string; // описание чекпоинта (эмиттера) - 'ОСНОВНЫЕ ДАННЫЕ ПРИЛОЖЕНИЯ'
    nameForEmitter: string; // наименование чекпоинта (эмиттера) - appState$
    nameForWatcher: string; // наименование чекпоинта (эмиттера) в наблюдателе - appState
    type: any; // тип чекпоинта (эмиттера) - BehaviorSubject
}

export interface IAllCheckpoints {
    appActions?: IAction;
    appScreen?: IScreen;
    appState?: IState;
    appRouterHistory?: THistory;
    isTheme?: boolean;
    isSleep?: boolean;
}

export interface IWatcher extends IAllCheckpoints {
    itemChange: string;
}

/**
 * Описания для точек контроля - CheckpointsComponent
 *
 * количество и наименования параметров аналогично с IAllCheckpoints
 */
export enum ECheckpointsDescriptions {
    appActions = 'ОСНОВНЫЕ ДЕЙСТВИЯ ПРИЛОЖЕНИЯ',
    appScreen = 'ЭКРАН ПРИЛОЖЕНИЯ',
    appState = 'ОСНОВНЫЕ ДАННЫЕ ПРИЛОЖЕНИЯ',
    appRouterHistory = 'ИСТОРИЯ РОУТНИГА',
    isTheme = 'СЕРВИС ПО СМЕНЕ ТЕМ (светлая/темная) ПРИЛОЖЕНИЯ',
    isSleep = 'СЕРВИС ОТСЛЕЖИВАНИЯ АКТИВНОСТИ ПОЛЬЗОВАТЕЛЯ',
}

@Injectable({ providedIn: 'root' })
export class CheckpointsService {

    // переменные для функций связанных с isTheme
    public themeDark;
    public themeLight;
    // переменные для функций связанных с isSleep - бездействие пользователя
    public userSleep;
    public userWork;
    // переменные для функций связанных с appScreen
    public setAppScreen;
    /**
     * Стартовые значения для эмиттеров
     *
     * количество и наименования параметров аналогично с IAllCheckpoints
     */
    private _startValues: IAllCheckpoints = {
        appActions: null,
        appScreen: this._helper.screen.checkScreen(),
        appState: {
            visitorHasLogin: false,
            roles: ['visitor'],
            participants: [],
            cupsReferee: [],
            cupsParticipants: [],
            cupsFounders: [],
        },
        appRouterHistory: [],
        isTheme: false,
        isSleep: false,
    };
    private _isStartApp = true;
    // конфиг-массив из которого создаются эмиттеры
    private _configCheckpoints: ICheckpoint[] = [];
    // из чего состоит стейт
    private _watcher: IWatcher = {
        ...this._startValues,
        itemChange: null, // изменение стейта которое произошло
    };
    // главный эмиттер приложения
    public _appCheckpoints$: BehaviorSubject<any> = new BehaviorSubject(this._watcher);
    public watcher: IWatcher = this._helper.object.objectCopy(this._watcher);
    private USER_ACTIVITY = 600; // секунды - время после простоя пользователя происходит выход из приложения
    private readonly destroyed$ = new Subject();

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        private _helper: HelperService,
        private _reglament: ReglamentService,
        private _router: Router,
    ) {
    }

    /**
     * по конфигу создаем эмиттеры, подписчики и функции-диспатчеры
     */
    public initCheckpoints() {
        // наполняем конфиг
        Object.keys(this._startValues).forEach(key => {
            const checkpoint = {
                descriptions: ECheckpointsDescriptions[key],
                nameForEmitter: key + '$',
                nameForWatcher: key,
                type: BehaviorSubject,
            };

            this._configCheckpoints.push(checkpoint);
        });

        // создаем подписку на главный эмиттер и отправку информации в регламент приложения
        this._createAppSubscriber();

        // по конфигу создаем эмиттеры, подписчиков и диспатчеров
        this._configCheckpoints.forEach(checkpoint => {
            // создаем эмиттер
            if (checkpoint.nameForWatcher !== 'appRouterHistory') {
                this._createEmitter(checkpoint);
            }

            // создаем подписку на эмиттер
            if (checkpoint.nameForWatcher !== 'appRouterHistory') {
                this._createSubscriber(checkpoint);
            } else {
                this._createRouterSubscriber(checkpoint);
            }
            // создаем функцию для эмиттера - пример использования - this['dispatchAppScreen']('!!!!!')
            if (checkpoint.nameForWatcher !== 'appRouterHistory') {
                this._createDispatcher(checkpoint);
            }
        });

        this._isStartApp = false;

        this._startState();
    }

    public createDispatcherForAppScreen(checkpoint) {
        this.setAppScreen = function(screen: IScreen) {
            this[checkpoint.nameForEmitter].next(screen);
        };
    }

    public createDispatcherForIsTheme(checkpoint) {
        this.themeDark = function() {
            this[checkpoint.nameForEmitter].next(true);
        };

        this.themeLight = function() {
            this[checkpoint.nameForEmitter].next(false);
        };
    }

    public createDispatcherForIsSleep(checkpoint) {
        this.userSleep = function() {
            this[checkpoint.nameForEmitter].next(true);
        };

        this.userWork = function() {
            this[checkpoint.nameForEmitter].next(false);
        };
    }

    private _startState() {
        // активность пользователя - isSleep
        fromEvent(this.document, 'click')
            .pipe(
                takeUntil(this.destroyed$),
                switchMap(() => interval(1000)), // 1000 - одна секунда
            )
            .subscribe(x => {
                if (x === this.USER_ACTIVITY) {
                    this.userSleep(); // эмиттит isSleep = true
                }
            });
        document.body.click();
    }

    /**
     * Создаем эмиттер и присваиваем value с интерфейсом
     */
    private _createEmitter(checkpoint): void {
        const startValue = this._startValues[checkpoint.nameForWatcher];

        // this._watcher[checkpoint.nameForWatcher] = null;
        if (startValue !== undefined) {
            this[checkpoint.nameForEmitter] = new checkpoint.type(startValue);
        } else {
            throw new Error('Для ' + checkpoint.nameForWatcher + ' - отсутствует переменная с интерфейсом');
        }
    }

    /**
     * подписка на главный эмиттер и отправка информации в регламенты приложения
     * _appCheckpoint$ УЖЕ создан (т.е. его не нужно динамически создавать)
     * результат подписки отправляется в регламент приложения
     */
    private _createAppSubscriber() {
        this._appCheckpoints$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(checkpoints => {
                // отправка информации в регламент приложения
                if (!this._isStartApp) {
                    this._helper.common.setTypelog([this.constructor.name, checkpoints], 20, '-');
                    this._reglament.getСheckpoints(checkpoints);
                }
            });
    }

    /**
     * Создаем подписку на эмиттер
     */
    private _createSubscriber(checkpoint): void {
        this[checkpoint.nameForEmitter]
            .pipe(takeUntil(this.destroyed$))
            .subscribe(item => {
                this._watcher[checkpoint.nameForWatcher] = item;
                this._watcher.itemChange = this._isStartApp ? null : checkpoint.nameForWatcher;
                if (!this._isStartApp) { this._appCheckpoints$.next(this._watcher); }
            });
    }

    private _createRouterSubscriber(checkpoint) {
        this._router.events
            .pipe(takeUntil(this.destroyed$))
            .subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this._watcher[checkpoint.nameForWatcher].push(event.urlAfterRedirects);
                    if (this._watcher[checkpoint.nameForWatcher].length > 10) {
                        this._watcher[checkpoint.nameForWatcher] = this._watcher[checkpoint.nameForWatcher].slice(-9); // оствить последние 10 шт
                    }
                    this._watcher.itemChange = this._isStartApp ? null : checkpoint.nameForWatcher;
                    if (!this._isStartApp) { this._appCheckpoints$.next(this._watcher); }
                }
            });
    }

    /**
     * Создаем функцию (диспатчер) для эмиттера
     *
     * пример использования - this['dispatchAppScreen']('!!!!!')
     */
    private _createDispatcher(checkpoint): void {
        this['dispatch' + hhh.string.firstLetterCapitalize(checkpoint.nameForWatcher)] = function(value) {
            this[checkpoint.nameForEmitter].next(value);
        };

        if (checkpoint.nameForWatcher === 'appScreen') {
            this.createDispatcherForAppScreen(checkpoint);
        }

        if (checkpoint.nameForWatcher === 'isTheme') {
            this.createDispatcherForIsTheme(checkpoint);
        }

        if (checkpoint.nameForWatcher === 'isSleep') {
            this.createDispatcherForIsSleep(checkpoint);
        }
    }

    /* Отписываемся от подписок из appComponent*/
    public onDestroyApp(): void {
        console.log('+++++++++++++++++++++++++++++++++++++++++-');
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
