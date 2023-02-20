/* Общие функции. Для работы с DOM */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TGetElement, TSelector } from '@interfaces/helper.interfaces';
import { CommonService } from '@helper/common.service';

@Injectable({ providedIn: 'root' })
export class DomService {
    private _countGetElement = 0;

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        private common: CommonService,
    ) {
    }

    /* Несколько итераций для получения необходимого html элемента */
    public async getElement(identifier: string, selector: TSelector = 'querySelector', node = this.document, time = 500, max = 20): Promise<TGetElement> {
        // let result: Element | NodeList = await this._getElementResult(identifier, selector, node, time, max);
        let result = await this._getElementResult(identifier, selector, node, time);

        // СИНТАКСИС в IF - 'length' in result && result.length < 1 - для NodeList и селектора querySelectorAll
        if ((!result || 'length' in result && result.length < 1) && this._countGetElement < max) {
            this._countGetElement++;
            result = await this.getElement(identifier, selector, node, time, max);
        }

        return result;
    }

    /**
     * Получаем расположение элемента
     * @param el- элемент
     */
    public getLocationOfElement(el: Element | NodeList): DOMRect {
        // информация о размере элемента и его положение относительно области просмотра
        if ('getBoundingClientRect' in el) {
            return <DOMRect> el.getBoundingClientRect();
        }
    }

    /* Добавить класс к элементу */
    public addClassToElement(el: Element | NodeList, newClass: string): boolean {
        if ('classList' in el) {
            el.classList.add(newClass); // добавляем класс

            return true;
        }

        return false;
    }

    /* Удалить класс у элемента */
    public removeClassToElement(el: Element | NodeList, removeClass: string): boolean {
        if ('classList' in el) {
            el.classList.remove(removeClass); // добавляем класс

            return true;
        }

        return false;
    }

    /**
     * Получаем родительский элемент полученного элемента
     * @param el- элемент
     */
    public getParentElement(el: Element | NodeList): Node & ParentNode {

        return 'parentNode' in el ? el.parentNode : null;
    }

    /**
     * Получаем соседние элементы(nextElementSibling) полученного элемента
     * @param el- элемент
     */
    public getNextSiblingElement(el: Element | NodeList): Element[] {
        const result = [];

        while (el) {
            if ('nextElementSibling' in el) {
                result.push(el);
                el = el.nextElementSibling;
            }
        }

        return result;
    }

    /**
     * Получаем соседние элементы(previousSibling) полученного элемента
     * @param el- элемент
     */
    public getPreviousSiblingElement(el: Element | NodeList | Node): Element[] {
        const result = [];

        while (el) {
            if ('previousSibling' in el) {
                result.push(el);
                el = el.previousSibling;
            }
        }

        return result;
    }

    /**
     * Получаем дочерние элементы полученного элемента
     * @param el- элемент
     */
    public getChildrenOfGivenElement(el): Element[] {
        const result = [];
        const itemsArray = Array.from(el.children); // make Array from his children

        itemsArray.forEach(item => {
            result.push(item);
        });

        return result;
    }

    /* Получение необходимого html элемента */
    private async _getElementResult(identifier: string, selector: TSelector, node, time): Promise<TGetElement> {
        return await this
            .common.setDelay(time)
            .then(_ => node[selector](identifier));
    }
}
