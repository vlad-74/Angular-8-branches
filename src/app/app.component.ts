/* Стартовы компонент */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from '@root/01_state/theme.service';
import { StateService } from '@root/01_state/state.service';
import { ActionsService } from '@root/01_state/actions.service';
import { AppSnapshotService } from '@root/01_state/app-snapshot.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'competitions';

    private isStartApp = true;

    public appActions;
    public appState;
    public isTheme;

    private readonly destroyed$ = new Subject();

    public constructor(
        private _actions: ActionsService,
        private _snapShot: AppSnapshotService,
        private _state: StateService,
        private _theme: ThemeService,
    ) {
    }

    /*
    Подписываемся на appActions, appState, isTheme
    для получения во всех компонентах (при необходимости) - appSnapshot
    */
    public ngOnInit() {
        this._actions.appActions
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appActions => {
                this.appActions = appActions;
                this._watch('appActions', appActions);
            });

        this._state.appState
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appState => {
                this.appState = appState;
                this._watch('appState', appState);
            });

        this._theme.isTheme
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(isTheme => {
                this.isTheme = isTheme;
                this._watch('isTheme', isTheme);
            });

        this.isStartApp = false;
        this._startAppSnapshot();
    }

    /*
    При любом изменении в appActions, appState, isTheme
    эмитится appSnapshot для всех компонентов
    */
    public dispatch(item) {
        this._snapShot.getCurrentAppSnapshot({
            appActions: this.appActions,
            appState: this.appState,
            isTheme: this.isTheme,
            itemChange: item,
        });
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    /* Если не старт, то идет отправка appSnapshot всем компонентам */
    private _watch(item, itemName) {
        this[itemName] = item;
        if (!this.isStartApp) { this.dispatch(item); }
    }

    /* Инициируем appSnapshot - lightTheme() вызовет подписку и последующий dispatch */
    private _startAppSnapshot() {
        this._theme.lightTheme();
        // kvg: задать стартовый стейт
    }
}
