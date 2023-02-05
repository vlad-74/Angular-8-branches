/* Стартовы компонент */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscribeService } from '@root/03_subscribe/subscribe.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'competitions';

    public constructor(
        private _subscribeApp: SubscribeService,
    ) {
    }

    /* Подписываемся на STATE & USER_ACTIVITY */
    public ngOnInit() {
        this._subscribeApp.onInitApp();

    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this._subscribeApp.onDestroyApp();
    }
}
