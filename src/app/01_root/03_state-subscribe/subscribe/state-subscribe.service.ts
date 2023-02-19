/*
  МЕСТО ПОДПИСОК СТЕЙТА ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActionsService } from '@state/actions.service';
import { AppSnapshotService } from '@state/app-snapshot.service';
import { StateService } from '@state/state.service';
import { ThemeService } from '@state/theme.service';
import { UserActivityService } from '@state/user-activity.service';
import { StateDispatchService } from '@reglaments/state-dispatch.service';
import { ScreenService } from '@state/screen.service';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StateSubscribeService {

    private isStartApp = true;

    public appActions;
    public appState;
    public isTheme;
    public isSleep;
    public appHistory: string[] = [];

    private readonly destroyed$ = new Subject();

    public constructor(
        private _actions: ActionsService,
        private _snapShot: AppSnapshotService,
        private _state: StateService,
        private _theme: ThemeService,
        private _userActivity: UserActivityService,
        private _screen: ScreenService,
        private _stateDispatch: StateDispatchService,
        private _router: Router,
    ) {
    }

    /*
    Подписываемся на изменения url, appState$, appActions$, appScreen$, isTheme$, isSleep$
    для получения во всех компонентах (при необходимости) - appSnapshot$
    */
    public stateSubscribe() {
        this._router.events
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.appHistory.push(event.urlAfterRedirects);
                    if (this.appHistory.length > 10) {
                        this.appHistory = this.appHistory.slice(-9); // оствить последние 10 шт
                    }
                    this._stateDispatch.appHistory = this.appHistory;
                    this._watch('appHistory', this.appHistory);
                }
            });

        this._state.appState$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appState => {
                this._stateDispatch.appState = appState;
                this._watch('appState', appState);
            });

        this._actions.appActions$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appActions => {
                this._stateDispatch.appActions = appActions;
                this._watch('appActions', appActions);
            });

        this._screen.appScreen$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appScreen => {
                this._stateDispatch.appScreen = appScreen;
                this._watch('appScreen', appScreen);
            });

        this._theme.isTheme$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(isTheme => {
                this._stateDispatch.isTheme = isTheme;
                this._watch('isTheme', isTheme);
            });

        this._userActivity.isSleep$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(isSleep => {
                this._stateDispatch.isSleep = isSleep;
                this._watch('isSleep', isSleep);
            });

        this.isStartApp = false;
        this._startAppSnapshot();
    }

    /* Отписываемся от подписок */
    public onDestroyApp(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    /* Если не старт, то идет отправка appSnapshot$ всем компонентам */
    private _watch(item, itemName) {
        this[itemName] = item;
        if (!this.isStartApp) {
            /*
            При любом изменении в appActions$, appScreen$, appState$, isTheme$, isSleep$, url
            эмитится appSnapshot$ для всех компонентов
            */
            this._stateDispatch.stateDispatch(item);
        }
    }

    /* Инициируем appSnapshot$ - lightTheme() вызовет подписку и последующий dispatch */
    private _startAppSnapshot() {
        this._theme.lightTheme();
        // kvg: задать стартовый стейт
    }
}
