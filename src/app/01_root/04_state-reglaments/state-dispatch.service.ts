import { Injectable } from '@angular/core';
import { AppSnapshotService } from '@state/app-snapshot.service';

@Injectable({ providedIn: 'root' })
export class StateDispatchService {

    public appActions;
    public appScreen;
    public appState;
    public isTheme;
    public isSleep;

    public constructor(
        private _snapShot: AppSnapshotService,
    ) {
    }

    /*
    При любом изменении в appActions$, appState$, isTheme$, isSleep$ сервиса StateSubscribeService
    в сервисе AppSnapshotService эмитится appSnapshot$ для всех компонентов
    */
    public stateDispatch(itemState) {
        this._snapShot.setCurrentAppSnapshot({
            appActions: this.appActions,
            appState: this.appState,
            appScreen: this.appScreen,
            isTheme: this.isTheme,
            isSleep: this.isSleep,
            itemChange: itemState,
        });
    }
}
