/*
  МЕСТО ПОДПИСИ АКТИВНОСТИ ПОЛЬЗОВАТЕЛЯ В ПРИЛОЖЕНИИ
*/

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { switchMap, takeUntil } from 'rxjs/operators';
import { fromEvent, interval, Subject } from 'rxjs';
import { UserActivityService } from '@state/user-activity.service';

@Injectable({ providedIn: 'root' })
export class UserActivitySubscribeService {

    public USER_ACTIVITY = 60; // секунды - время после простоя пользователя происходит выход из приложения

    private readonly destroyed$ = new Subject();

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        private _userActivity: UserActivityService,
    ) {
    }

    /* Подписываемся на USER_ACTIVITY */
    public userActivitySubscribe() {
        fromEvent(this.document, 'click')
            .pipe(
                takeUntil(this.destroyed$),
                switchMap(() => interval(1000)), // 1000 - одна секунда
            )
            .subscribe(x => {
                // console.log('---x', x);
                if (x === this.USER_ACTIVITY) {
                    console.log('---this.USER_ACTIVITY', this.USER_ACTIVITY);
                    this._userActivity.userSleep();
                }
            });
        document.body.click();
    }

    /* Отписываемся от подписок */
    public onDestroyApp(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
