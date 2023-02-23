import { Component, OnInit } from '@angular/core';
import { HelperService } from '@helper/helper.service';

@Component({
    selector: 'dom',
    templateUrl: './dom.component.html',
    styleUrls: ['./dom.component.scss'],
})
export class DomComponent implements OnInit {

    public constructor(
        private _h: HelperService,
    ) {
    }

    /* Подписывемся на appSnapshot$*/
    public ngOnInit() {
        this.testDom().then();
    }

    public async testDom() {
        const el = await this._h.dom.getElement('dom div');

        if (!this._h.dom.addClassToElement(el,  'red')) {
            console.log('еще одна попытка' );
        } else {
            console.log('getParentElement', this._h.dom.getParentElement(el));
            console.log('getNextSiblingElement', this._h.dom.getNextSiblingElement(el));
            console.log('getPreviousSiblingElement', this._h.dom.getPreviousSiblingElement(el));
            console.log('getChildrenOfGivenElement', this._h.dom.getChildrenOfGivenElement(el));
        }
    }
}
