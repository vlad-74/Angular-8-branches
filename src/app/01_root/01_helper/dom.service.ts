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

    /* Получение необходимого html элемента */
    private async _getElementResult(identifier: string, selector: TSelector, node, time): Promise<TGetElement> {
        return await this
            .common.setDelay(time)
            .then(_ => node[selector](identifier));
    }
}
