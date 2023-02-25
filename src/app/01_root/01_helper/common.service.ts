/* Общие функции. Для работы с логикой */

import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {
    protected logСоunt = 0;

    /*
     Задержка во времени
     ПРИМЕР
         private async _getElementResult(name, parent, time, max): Promise<any> {
           return await this
           ._setDelay(time)
           .then( _ => parent.querySelector(name) );
         }
    */
    public setDelay(ms): Promise<unknown> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // console.log(this.constructor.name + ' - appSnapshot - ', appSnapshot);
    public log(arg) {
        if (!environment.production) {
            this.logСоunt++;
            console.log('====================================================== ' + this.logСоunt, ...arg);
        }
    }

    /**
     * Измерить время выполнения функции в миллисекундах
     * @param fn - функция
     * @param self - если нужно передать this
     * @param args - необходимые аргументы
     * @param isAwait - если асинхронная функция
     */
    public async getFunctionExecutionTime(fn, self = null, args = [], isAwait = false) {
        const start = new Date().getTime();

        // для DomComponent компонента и функции this._h.dom.elementGet - await fn.call(self, 'dom div span', 'querySelector', document);
        if (isAwait) {
            await fn.call(self, ...args);
        } else {
            fn.call(self, ...args);
        }
        const end = new Date().getTime();

        console.log( `Время выполнения функции "${fn.name}" равно ${end - start} миллисекунд`);
    }
}
