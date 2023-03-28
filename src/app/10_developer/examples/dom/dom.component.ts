import { Component, OnInit } from '@angular/core';
declare var myExtObject: any;
declare var webGlObject: any;

@Component({
    selector: 'dom',
    templateUrl: './dom.component.html',
    styleUrls: ['./dom.component.scss'],
})
export class DomComponent implements OnInit {

    public ngOnInit() {
        this.testDom().then();
        this.renderer().then();

        this.callFunction1();
        this.callFunction2();
        this.callFunction3();
    }

    public async testDom() {
        const el = await hhh.dom.elementGet('dom div');

        if (!hhh.dom.elementClassAdd(el,  'red')) {
            console.log('еще одна попытка' );
        } else {
            console.log('getParentElement', hhh.dom.elementGetParent(el));
            console.log('getNextSiblingElement', hhh.dom.elementGetSiblingNext(el));
            console.log('getPreviousSiblingElement', hhh.dom.elementGetSiblingPrevious(el));
            console.log('getChildrenOfGivenElement', hhh.dom.elementGetChildren(el));
            console.log('elementsGeAllNeighbor', hhh.dom.elementsGetSiblingAll(el));
        }

        this.checkCache();

        setTimeout(() => {
            hhh.dom.elementClassRemove(el,  'red');
        }, 2000);
    }

    public async renderer() {
        // =============== Создаем элемент
        const counter = hhh.unique.generateUniqueString();
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

        hhh.common.getFunctionExecutionTime(
            hhh.dom.elementGet,
            {
                getElementResult: hhh.dom.getElementResult,
                common: hhh.common,
            },
            ['dom div span', 'querySelector', document],
            true,
        );
        const el = await hhh.dom.elementGet('dom div span');
        const fn = (event, renderer, el$, dataId) => {
            console.log('---el$', el$);
            console.log('---dataId', dataId);
            console.log('---event', event.target);

            if (event.target.dataset.remove) {
                renderer.removeChild(el, el$);
            }
            if (event.target.dataset.message) { alert(`Сообщение из div # ${counter}`); }
        };

        hhh.dom.elementCreate(el, 'div', 'appendChild', strInnerHtml, counter, 'click', fn);
        // hhh.dom.elementCreate('dom div span', 'div', 'appendChild', strInnerHtml,  counter, 'click', fn);

        // =============== Удаляем элемент
        const parentElement = await hhh.dom.elementGet('[data-id]');
        const removeElement = await hhh.dom.elementGet('[data-message]');

        hhh.dom.elementRemove(parentElement, removeElement);

        // =============== Вставляем скопированный элемент
        setTimeout(() => {
            hhh.dom.elementAdd(parentElement, 'appendChild', counter, 'click', null, removeElement);
        }, 5000);
    }

    public checkCache() {
        console.log('-1--hhh.storage.cache', hhh.storage.cache);
        hhh.common.getFunctionExecutionTime(this.querySelector1);
        hhh.common.getFunctionExecutionTime(
            this.querySelector2,
            { _h: hhh },
        );
        console.log('-2--hhh.storage.cache', hhh.storage.cache);
        setTimeout(() => {console.log('-3--hhh.storage.cache', hhh.storage.cache); }, 5000);
    }

    private querySelector1() { for (let i = 0; i < 1000000; i++) { document.querySelector('p'); } }

    private querySelector2() {
        hhh.storage.cache = {};
        for (let i = 0; i < 1000000; i++) {
            if (!hhh.storage.querySelectorCache('p', 'dom')) {
                break;
            }
        }
    }

    private callFunction1() {
        if (myExtObject) {
            myExtObject.func1();
        }
    }

    private callFunction2() {
        if (myExtObject) {
            myExtObject.func2();
        }
    }
    private callFunction3() {
        if (webGlObject) {
            webGlObject.init();
        }
    }
}
