/* Стартовы компонент */

import { Component, OnInit } from '@angular/core';
import { HelperService } from './helper/helper.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
    public title = 'competitions';

    public constructor(
        private _h: HelperService,
    ) {
    }

    public ngOnInit() {
        console.log('---', this._h.screen.checkScreen());
    }
}
