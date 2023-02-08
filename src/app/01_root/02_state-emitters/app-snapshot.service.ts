/*
  СНИМОК ПРИЛОЖЕНИЯ
    1. при изменении в 02_state-emitters - appActions$, appState$, isTheme$, isSleep$
    2. обновляется СНИМОК ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppSnapshotService {
    public appSnapshot$: BehaviorSubject<any> = new BehaviorSubject({
        appActions: null,
        appScreen: null,
        appState: null,
        isTheme: null,
        isSleep: null,
        itemChange: null, // по этому показателю определяется логика в зависимости ГДЕ произошли изменения
    });

    public setCurrentAppSnapshot(snapshot): any {
        this.appSnapshot$.next(snapshot);
    }
}
