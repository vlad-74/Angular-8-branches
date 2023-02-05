/*
  ОСНОВНОЕ МЕСТО ПОДПИСОК ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { UserActivitySubscribeService } from '@root/03_subscribe/user-activity-subscribe.service';
import { StateSubscribeService } from '@root/03_subscribe/state-subscribe.service';

@Injectable({ providedIn: 'root' })
export class SubscribeService {

    public constructor(
        private _userActivity: UserActivitySubscribeService,
        private _stateSubscribe: StateSubscribeService,
    ) {
    }

    /* Подписываемся на STATE & USER_ACTIVITY */
    public onInitApp() {
        this._stateSubscribe.stateSubscribe();
        this._userActivity.userActivity();
    }

    /* Отписываемся от подписок */
    public onDestroyApp(): void {
        this._stateSubscribe.onDestroyApp();
        this._userActivity.onDestroyApp();
    }
}
