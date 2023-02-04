/* Общие функции. Для работы с DOM */
import { TGetElement, TSelector } from '../interfaces/helper.interfaces';

export class DomService {
    private _countGetElement = 0;

    /* Несколько итераций для получения необходимого html элемента */
    public async getElement(identifier: string, selector: TSelector = 'querySelector', node = document, time = 500, max = 20): Promise<TGetElement> {
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
            ._setDelay(time)
            .then(_ => node[selector](identifier));
    }

    /* Задержка во времени. Аналог есть в CommonService */
    public _setDelay(ms): Promise<unknown> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
