import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { UserActivityService } from '@checkpoints/01_state-emitters/user-activity.service';

@Component({
    selector: 'sleep',
    templateUrl: './sleep.component.html',
    styleUrls: ['./sleep.component.scss'],
})
export class SleepComponent implements OnInit, OnDestroy {

    private _interval;

    public constructor(
        public router: Router,
        @Inject(DOCUMENT) private document: Document,
        private _userActivity: UserActivityService,
    ) {
    }

    public ngOnInit() {
        this._interval = setInterval(() => {
            const d = new Date();
            const t = d.toLocaleTimeString([], {
                hour: '2-digit', minute: '2-digit', second: '2-digit',
            });

            document.querySelector('.time').innerHTML = t.replace(':', ':');

        }, 1000);
    }

    public goHome() {
        this._userActivity.userWork();
        this.router.navigate(['']).then();
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        clearInterval(this._interval);
    }
}
