import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../helper/helper.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public constructor(
        private _h: HelperService,
    ) {
    }

    public ngOnInit() {
        this.test().then();
    }

    public async test() {
        console.log('+++++++', this._h.screen.checkScreen());
        console.log('=======', await this._h.dom.getElement('login'));
    }

}
