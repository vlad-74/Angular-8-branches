/*
  МЕСТО ПОДПИСОК СТЕЙТА ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ActionsService } from '@state/actions.service';
import { AppSnapshotService } from '@state/app-snapshot.service';
import { StateService } from '@state/state.service';
import { ThemeService } from '@state/theme.service';
import { Subject } from 'rxjs';
import { UserActivityService } from '@state/user-activity.service';

@Injectable({ providedIn: 'root' })
export class StateSubscribeService {

    private isStartApp = true;

    public appActions;
    public appState;
    public isTheme;
    public isSleep;

    private readonly destroyed$ = new Subject();

    public constructor(
        private _actions: ActionsService,
        private _snapShot: AppSnapshotService,
        private _state: StateService,
        private _theme: ThemeService,
        private _userActivity: UserActivityService,
    ) {
    }

    /*
    Подписываемся на appActions$, appState$, isTheme$
    для получения во всех компонентах (при необходимости) - appSnapshot$
    */
    public stateSubscribe() {
        this._actions.appActions$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appActions => {
                this.appActions = appActions;
                this._watch('appActions', appActions);
            });

        this._state.appState$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appState => {
                this.appState = appState;
                this._watch('appState', appState);
            });

        this._theme.isTheme$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(isTheme => {
                this.isTheme = isTheme;
                this._watch('isTheme', isTheme);
            });

        this._userActivity.isSleep$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(isSleep => {
                this.isSleep = isSleep;
                this._watch('isSleep', isSleep);
            });

        this.isStartApp = false;
        this._startAppSnapshot();
    }

    /*
    При любом изменении в appActions$, appState$, isTheme$
    эмитится appSnapshot$ для всех компонентов
    */
    public dispatch(item) {
        this._snapShot.getCurrentAppSnapshot({
            appActions: this.appActions,
            appState: this.appState,
            isTheme: this.isTheme,
            isSleep: this.isSleep,
            itemChange: item,
        });
    }

    /* Отписываемся от подписок */
    public onDestroyApp(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    /* Если не старт, то идет отправка appSnapshot$ всем компонентам */
    private _watch(item, itemName) {
        this[itemName] = item;
        if (!this.isStartApp) { this.dispatch(item); }
    }

    /* Инициируем appSnapshot$ - lightTheme() вызовет подписку и последующий dispatch */
    private _startAppSnapshot() {
        this._theme.lightTheme();
        // kvg: задать стартовый стейт
    }
}
