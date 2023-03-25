/* Общие функции. Для работы с DOM */
import { ElementRef, Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TAllEvents, TGetElement, TSelector, TTypeAppend } from '@interfaces/helper.interfaces';
import { CommonService } from '@helper/common.service';

@Injectable({ providedIn: 'root' })
export class DomService {
    public renderer: Renderer2;
    private _countGetElement = 0;

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        private common: CommonService,
        private _renderer: RendererFactory2,
    ) {
        this.renderer = _renderer.createRenderer(null, null);
    }

    /**
     * Создаем новый html элемент
     * @param parentElement- элемент на который будет добавляться новый элемент
     * @param typeAppend- тип добавления
     * @param strInnerHTML- шаблон html
     * @param newElement- добавляемый элемент
     * @param dataId- идентификатор - id для атрибута data-id
     * @param eventName- тип эвента для listen
     * @param fn - функция для eventName
     */
    public elementCreate(parentElement: Element | NodeList | string, newElement: string, typeAppend: TTypeAppend, strInnerHTML: string, dataId: number | string, eventName: TAllEvents, fn = null) {
        parentElement = typeof parentElement === 'string' ? this.renderer.selectRootElement(parentElement) : parentElement;

        const el$ = this.renderer.createElement(newElement);

        this.renderer.setAttribute(el$, 'data-id', String(dataId));
        el$.innerHTML = strInnerHTML;

        this.elementAdd((parentElement as Element), typeAppend, dataId, eventName, fn, el$);
        console.log('--this.common.getFunctionName-', this.common.getFunctionName());
    }

    /**
     * Добавляем HTMl элемент
     * @param parentElement- элемент на который будет добавляться новый элемент
     * @param typeAppend- тип добавления
     * @param dataId- идентификатор - id для атрибута data-id
     * @param eventName- тип эвента для listen
     * @param fn - функция для eventName
     * @param el$- добавляемый элемент
     */
    public elementAdd(parentElement: Element | NodeList, typeAppend: TTypeAppend, dataId: number | string, eventName: TAllEvents, fn, el$) {
        if ('firstChild' in parentElement) {
            this.renderer[typeAppend](parentElement, el$, parentElement.firstChild);
        } else {
            this.renderer[typeAppend](parentElement, el$, parentElement);
        }

        if (fn) {
            this.renderer.listen(el$, eventName, event => {
                fn.call(null, event, this.renderer, el$, dataId);
            });
        }
    }

    /**
     * Удаляем HTMl элемент
     * @param parentElement- родительский элемент
     * @param el$- элемент
     */
    public elementRemove(parentElement: Element | NodeList, el$: Element | NodeList) {
        this.renderer.removeChild(parentElement, el$);
    }

    /**
     * Несколько итераций для получения необходимого html элемента
     * @param identifier - вид выборки - типа -'dom div' для селектора
     * @param selector - селектор
     * @param node - родительский элемент
     * @param time - время в миллисекундах - для задержки
     * @param max - максимальное количество попыток получения результата
     */
    public async elementGet(identifier: string, selector: TSelector = 'querySelector', node = this.document, time = 100, max = 100): Promise<TGetElement> {
        let result = await this.getElementResult(identifier, selector, node, time);

        // СИНТАКСИС в IF - 'length' in result && result.length < 1 - для NodeList и селектора querySelectorAll
        if ((!result || 'length' in result && result.length < 1) && this._countGetElement < max) {
            this._countGetElement++;
            result = await this.elementGet(identifier, selector, node, time, max);
        }

        return result;
    }

    /**
     * Получаем расположение элемента
     * @param el- элемент
     */
    public elementGetLocation(el: Element | NodeList): DOMRect {
        // информация о размере элемента и его положение относительно области просмотра
        if ('getBoundingClientRect' in el) {
            return <DOMRect> el.getBoundingClientRect();
        }
    }

    /**
     *  Добавить класс к элементу
     *  @param el- элемент
     *  @param newClass- новый класс
     */
    public elementClassAdd(el: Element | NodeList, newClass: string): boolean {
        if ('classList' in el) {
            // el.classList.add(newClass); // добавляем класс
            this.renderer.addClass(el, newClass);

            return true;
        }

        return false;
    }

    /**
     *  Удалить класс у элемента
     *  @param el- элемент
     *  @param removeClass- удаляемый класс
     */
    public elementClassRemove(el: Element | NodeList, removeClass: string): boolean {
        if ('classList' in el) {
            // el.classList.remove(removeClass); // добавляем класс
            this.renderer.removeClass(el, removeClass);

            return true;
        }

        return false;
    }

    /**
     * Получаем родительский элемент полученного элемента
     * @param el- элемент
     */
    public elementGetParent(el: Element | NodeList): Node & ParentNode {
        // return 'parentNode' in el ? el.parentNode : null;
        return this.renderer.parentNode(el);
    }

    /**
     * Получить все соседние элементы, в не зависимости от места от полученного элемента
     * @param el- элемент
     */
    public elementsGetSiblingAll(el: Element | NodeList): Element[] {
        const parent = this.renderer.parentNode(el);
        const firstElement = parent.firstChild;

        return this.elementGetSiblingNext(firstElement);
    }

    /**
     * Получаем соседние элементы(nextElementSibling) полученного элемента
     * @param el- элемент
     */
    public elementGetSiblingNext(el: Element | NodeList): Element[] {
        const result = [];

        while (el) {
            if ('nextElementSibling' in el) {
                result.push(el);
                // el = el.nextElementSibling;
                el = this.renderer.nextSibling(el);
            }
        }

        return result;
    }

    /**
     * Получаем соседние элементы(previousSibling) полученного элемента
     * @param el- элемент
     */
    public elementGetSiblingPrevious(el: Element | NodeList | Node): Element[] {
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
    public elementGetChildren(el): Element[] {
        const result = [];
        const itemsArray = Array.from(el.children); // make Array from his children

        itemsArray.forEach(item => {
            result.push(item);
        });

        return result;
    }

    /* Получение необходимого html элемента */
    public async getElementResult(identifier: string, selector: TSelector, node, time): Promise<TGetElement> {
        return await this
            .common.setDelay(time)
            .then(_ => node[selector](identifier));
    }

    /**
     * Добавить скрипт в HTML
     * @param url- путь к скрипту - например - './assets/scripts/code.js'
     */
    public addScriptToHTML(url: string): void  {
        const script = this.document.createElement('script');

        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        this.document.getElementsByTagName('head')[0].appendChild(script);
    }

    /**
     * Добавить CSS в HTML
     * @param href- путь к стилям - например - './assets/css/style.css'
     */
    public addLinkToHTML(url: string): void  {
        const script = this.document.createElement('link');

        script.setAttribute('rel', 'stylesheet');
        script.setAttribute('type', 'text/css');
        script.setAttribute('href', url);
        this.document.getElementsByTagName('head')[0].appendChild(script);
    }

}
