import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'sleep',
    templateUrl: './sleep.component.html',
    styleUrls: ['./sleep.component.scss'],
})
export class SleepComponent implements OnInit {

    public constructor(
        public router: Router,
        @Inject(DOCUMENT) private document: Document,
    ) {
    }

    public ngOnInit() {
        setInterval(() => {
            const d = new Date();
            const t = d.toLocaleTimeString([], {
                hour: '2-digit', minute: '2-digit',
            });

            const el = document.querySelector('.time').innerHTML = t.replace(':', ':')
        }, 1000);
    }

    public goHome() {
        this.router.navigate(['']).then();
    }
}
