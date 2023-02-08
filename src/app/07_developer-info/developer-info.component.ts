import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'developer-info',
    templateUrl: './developer-info.component.html',
    styleUrls: [ './developer-info.component.scss' ],
})
export class DeveloperInfoComponent implements OnInit {
    public title = 'competitions';

    public constructor(
        private _router: Router,
    ) {
    }

    public ngOnInit() {
    }

    public goHome() {
        this._router.navigate(['']).then();
    }

    public goTest() {
        this._router.navigate(['developer', 'test']).then();
    }

    public goSleep() {
        this._router.navigate(['sleep']).then();
    }

    public goNotFound() {
        this._router.navigate(['not-found']).then();
    }

    public goAdmin() {
        this._router.navigate(['admin']).then();
    }
}
