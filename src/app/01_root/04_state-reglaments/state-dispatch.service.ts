/*
  МЕСТО В КОТОРОМ "ПУБЛИКУЕТСЯ" СНИМОК ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { AppSnapshotService } from '@state/app-snapshot.service';

@Injectable({ providedIn: 'root' })
export class StateDispatchService {

    public appActions;
    public appScreen;
    public appState;
    public isTheme: boolean;
    public isSleep: boolean;
    public appHistory: string[] = [];

    public constructor(
        private _snapShot: AppSnapshotService,
    ) {
    }

    /*
    При любом изменении в url, appActions$, appState$, isTheme$, isSleep$ сервиса StateSubscribeService
    в сервисе AppSnapshotService эмитится appSnapshot$ для всех компонентов
    */
    public stateDispatch(itemState) {
        this._snapShot.setCurrentAppSnapshot({
            appActions: this.appActions,
            appState: this.appState,
            appScreen: this.appScreen,
            isTheme: this.isTheme,
            isSleep: this.isSleep,
            history: this.appHistory,
            itemChange: itemState,
        });
    }
}
