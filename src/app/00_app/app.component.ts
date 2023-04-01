/* Стартовы компонент */

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from '@checkpoints/02_state-subscribe/subscribe.service';
import { ScreenService } from '@checkpoints/01_state-emitters/screen.service';
import { ScreenReglamentsService } from '@root/03_reglaments/reglaments/screen-reglaments.service';
import { LogComponent } from '@helper/extends/log.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    styles: [
        ':host { width: 100%; height: 100%; overflow: hidden;}',
    ],
})
export class AppComponent extends LogComponent implements OnInit, OnDestroy {
    public title = 'competitions';
    private resizeId;

    public constructor(
        private _subscribeApp: SubscribeService,
        private _screenReglaments: ScreenReglamentsService,
        private _screen: ScreenService,
        private _router: Router,
    ) {
        super('');
    }

    @HostListener('window:resize', ['$event'])
    public onResized(_: Event): void {
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(() => {
            const screen = hhh.screen.checkScreen();

            this._screen.setAppScreen(screen); // отрабатывает при ресйзе (при старте приложения нет)
        }, 500);
    }

    /* Подписываемся на STATE & USER_ACTIVITY */
    public ngOnInit() {
        this._subscribeApp.onInitApp();
        // if (!environment.production) {
        //     this._router.navigate(['developer']);
        // }
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this._subscribeApp.onDestroyApp();
    }
}
