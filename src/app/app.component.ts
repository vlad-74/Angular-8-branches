/* Стартовы компонент */

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from '@root/03_state-subscribe/subscribe.service';
import { ScreenReglamentsService } from '@reglaments/reglaments/screen-reglaments.service';
import { ScreenService } from '@state/screen.service';
import { HelperService } from '@helper/helper.service';
import { environment } from '@environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    styles: [
        ':host { width: 100%; height: 100%; overflow: hidden;}',
    ],
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'competitions';
    private resizeId;

    public constructor(
        private _subscribeApp: SubscribeService,
        private _screenReglaments: ScreenReglamentsService,
        private _screen: ScreenService,
        private _h: HelperService,
        private _router: Router,
    ) {
    }

    @HostListener('window:resize', ['$event'])
    public onResized(_: Event): void {
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(() => {
            const screen = this._h.screen.checkScreen();

            this._screen.setAppScreen(screen); // отрабатывает при ресйзе (при старте приложения нет)
        }, 500);
    }

    /* Подписываемся на STATE & USER_ACTIVITY */
    public ngOnInit() {
        console.log('-----------------------------------------------------' );
        this._subscribeApp.onInitApp();

        if (!environment.production) {
            this._router.navigate(['developer']);
        }
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this._subscribeApp.onDestroyApp();
    }
}
