/*
  МЕСТО ПОДПИСИ ТЕКУЩЕГО СОСТОЯНИЯ ПРИЛОЖЕНИЯ
*/

import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { AppSnapshotService } from '@state/app-snapshot.service';
import { takeUntil } from 'rxjs/operators';
import { ReglamentsService } from '@reglaments/reglaments.service';

@Injectable({ providedIn: 'root' })
export class SnapshotSubscribeService {

    private readonly destroyed$ = new Subject();

    public constructor(
        private _appSnapshot: AppSnapshotService,
        private _reglaments: ReglamentsService,
    ) {
    }

    /* Подписываемся на изменения ТЕКУЩЕГО СОСТОЯНИЯ ПРИЛОЖЕНИЯ */
    public getAppSnapshot() {
        this._appSnapshot.appSnapshot$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe(appSnapshot => {
                this._reglaments.checkStateChanges(appSnapshot);
            });
    }

    /* Отписываемся от подписок */
    public onDestroyApp(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
