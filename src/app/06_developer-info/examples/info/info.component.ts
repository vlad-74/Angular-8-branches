import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'info',
    templateUrl: './info.component.html',
    styleUrls: [ './info.component.scss' ],
})
export class InfoComponent implements OnInit {
    public title = 'competitions';

    public constructor(
        private _router: Router,
    ) {
    }

    public ngOnInit() {
    }
}
