/*
  ОСНОВНОЕ МЕСТО ПОДПИСОК ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { UserActivitySubscribeService } from '@subscribe/subscribe/user-activity-subscribe.service';
import { StateSubscribeService } from '@subscribe/subscribe/state-subscribe.service';
import { SnapshotSubscribeService } from '@subscribe/subscribe/snapshot-subscribe.service';

@Injectable({ providedIn: 'root' })
export class SubscribeService {

    public constructor(
        private _userActivitySubscribe: UserActivitySubscribeService,
        private _stateSubscribe: StateSubscribeService,
        private _snapshotSubscribe: SnapshotSubscribeService,
    ) {
    }

    /* Подписываемся на STATE (различные эмиттеры стейта) & USER_ACTIVITY */
    public onInitApp() {
        this._snapshotSubscribe.getAppSnapshot();
        this._stateSubscribe.stateSubscribe();
        this._userActivitySubscribe.userActivitySubscribe();
    }

    /* Отписываемся от подписок */
    public onDestroyApp(): void {
        this._stateSubscribe.onDestroyApp();
        this._userActivitySubscribe.onDestroyApp();
        this._snapshotSubscribe.onDestroyApp();
    }
}
