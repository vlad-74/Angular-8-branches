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

    public ngOnInit() {
        this.testDom().then();
        this.renderer().then();
    }

    public async testDom() {
        const el = await this._h.dom.elementGet('dom div');

        if (!this._h.dom.elementClassAdd(el,  'red')) {
            console.log('еще одна попытка' );
        } else {
            console.log('getParentElement', this._h.dom.elementGetParent(el));
            console.log('getNextSiblingElement', this._h.dom.elementGetSiblingNext(el));
            console.log('getPreviousSiblingElement', this._h.dom.elementGetSiblingPrevious(el));
            console.log('getChildrenOfGivenElement', this._h.dom.elementGetChildren(el));
            console.log('elementsGeAllNeighbor', this._h.dom.elementsGetSiblingAll(el));
        }

        this.checkCache();

        setTimeout(() => {
            this._h.dom.elementClassRemove(el,  'red');
        }, 2000);
    }

    public async renderer() {
        // =============== Создаем элемент
        const counter = this._h.unique.generateUniqueString();
        const strInnerHtml = `
          <button data-remove="${counter}" data-remove="${counter}" class="mat-raised-button mat-button-base warn">
            <span data-remove="${counter}" class="mat-button-wrapper"># ${counter} удалить</span>
            <div class="mat-button-ripple mat-ripple"></div>
            <div class="mat-button-focus-overlay">
            </div>
          </button>
          <button data-message="${counter}" class="mat-raised-button mat-button-base primary">
            <span data-message="${counter}" class="mat-button-wrapper"># ${counter} cooбщение</span>
            <div class="mat-button-ripple mat-ripple"></div>
            <div class="mat-button-focus-overlay">
            </div>
          </button>
        `;

        this._h.common.getFunctionExecutionTime(
            this._h.dom.elementGet,
            {
                getElementResult: this._h.dom.getElementResult,
                common: this._h.common,
            },
            ['dom div span', 'querySelector', document],
            true,
        );
        const el = await this._h.dom.elementGet('dom div span');
        const fn = (event, renderer, el$, dataId) => {
            console.log('---el$', el$);
            console.log('---dataId', dataId);
            console.log('---event', event.target);

            if (event.target.dataset.remove) {
                renderer.removeChild(el, el$);
            }
            if (event.target.dataset.message) { alert(`Сообщение из div # ${counter}`); }
        };

        this._h.dom.elementCreate(el, 'div', 'appendChild', strInnerHtml, counter, 'click', fn);
        // this._h.dom.elementCreate('dom div span', 'div', 'appendChild', strInnerHtml,  counter, 'click', fn);

        // =============== Удаляем элемент
        const parentElement = await this._h.dom.elementGet('[data-id]');
        const removeElement = await this._h.dom.elementGet('[data-message]');

        this._h.dom.elementRemove(parentElement, removeElement);

        // =============== Вставляем скопированный элемент
        setTimeout(() => {
            this._h.dom.elementAdd(parentElement, 'appendChild', counter, 'click', null, removeElement);
        }, 5000);
    }

    public checkCache() {
        console.log('-1--this._h.storage.cache', this._h.storage.cache);
        this._h.common.getFunctionExecutionTime(this.querySelector1);
        this._h.common.getFunctionExecutionTime(
            this.querySelector2,
            { _h: this._h },
        );
        console.log('-2--this._h.storage.cache', this._h.storage.cache);
        setTimeout(() => {console.log('-3--this._h.storage.cache', this._h.storage.cache); }, 5000);
    }

    private querySelector1() { for (let i = 0; i < 1000000; i++) { document.querySelector('p'); } }
    private querySelector2() {
        this._h.storage.cache = {};
        for (let i = 0; i < 1000000; i++) {
            if (!this._h.storage.querySelectorCache('p', 'dom')) {
                break;
            }
        }
    }
}
