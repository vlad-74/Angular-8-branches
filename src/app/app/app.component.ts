/* Стартовы компонент */

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReglamentScreenService } from '@reglaments/reglaments/reglament-screen.service';
import { CheckpointsService } from '@checkpoints/checkpoints.service';

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
        private _screenReglaments: ReglamentScreenService,
        private _router: Router,
        private _checkpoints: CheckpointsService,
    ) {
    }

    @HostListener('window:resize', ['$event'])
    public onResized(_: Event): void {
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(() => {
            const screen = hhh.screen.checkScreen();

            this._checkpoints.setAppScreen(screen); // отрабатывает при ресйзе (при старте приложения нет)
        }, 500);
    }

    /* Подписываемся на STATE & USER_ACTIVITY */
    public ngOnInit() {
        this._checkpoints.initCheckpoints();
        // if (!environment.production) {
        //     this._router.navigate(['developer']);
        // }
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this._checkpoints.onDestroyApp();
    }
}
