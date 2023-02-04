/*
  СНИМОК ПРИЛОЖЕНИЯ
    1. при изменении state, actions или teme
    2. обновляется СНИМОК ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from '../helper/helper.service';

@Injectable({ providedIn: 'root' })
export class AppSnapshotService {
    public appSnapshot: BehaviorSubject<any> = new BehaviorSubject({
        appActions: null,
        appState: null,
        isTheme: null,
    });

    public constructor(
        private _h: HelperService,
    ) {}

    public getCurrentAppSnapshot(snapshot): any {
        this._log([' - snapshot - ', snapshot]);
        this.appSnapshot.next(snapshot);
    }

    private _log(arr: any[]) {
        this._h.common.log(arr);
    }

}
