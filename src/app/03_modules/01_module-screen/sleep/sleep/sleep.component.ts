import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

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
    ) {
    }

    public ngOnInit() {
        this._interval = setInterval(() => {
            const d = new Date();
            const t = d.toLocaleTimeString([], {
                hour: '2-digit', minute: '2-digit', second: '2-digit',
            });

            const el = document.querySelector('.time').innerHTML = t.replace(':', ':');

        }, 1000);
    }

    public goHome() {
        this.router.navigate(['']).then();
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        clearInterval(this._interval);
    }
}
