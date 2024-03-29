import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'developer',
    templateUrl: './developer.component.html',
    styleUrls: [ './developer.component.scss' ],
    styles: [
        ':host { width: 100%;}',
    ],
})
export class DeveloperComponent implements OnInit {
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

    public goSleep() {
        this._router.navigate(['sleep']).then();
    }

    public goNotFound() {
        this._router.navigate(['not-found']).then();
    }

    public goAdmin() {
        this._router.navigate(['admin']).then();
    }

    public goTest() {
        this._router.navigate(['developer', 'test']).then();
    }

    public goInfo() {
        this._router.navigate(['developer', 'info']).then();
    }

    public goInternationalization() {
        this._router.navigate(['developer', 'internationalization']).then();
    }

    public goSnapshot() {
        this._router.navigate(['developer', 'snapshot']).then();
    }

    public goTheme() {
        this._router.navigate(['developer', 'theme']).then();
    }

    public goLoader() {
        this._router.navigate(['developer', 'loader']).then();
    }

    public goDom() {
        this._router.navigate(['developer', 'dom']).then();
    }

    public goAnimation() {
        this._router.navigate(['developer', 'animation']).then();
    }

    public goScreen() {
        this._router.navigate(['developer', 'screen']).then();
    }
}
