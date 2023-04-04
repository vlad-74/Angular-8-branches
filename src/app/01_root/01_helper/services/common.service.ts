/* Общие функции. Для работы с логикой */

import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BrowserService } from '@helper/services/browser.service';

@Injectable({ providedIn: 'root' })
export class CommonService {
    protected logСоunt = 0;

    public constructor(
        public browser: BrowserService,
    ) {
    }

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
    public log(arg, type = '***********') {
        if (!environment.production) {
            this.logСоunt++;
            console.log( this.logСоunt + ' ' + type  + ' ', ...arg);
            console.log('');
        }
    }

    public setTypelog(arg, length = 11, type = '*') {
        const _type = hhh.string.startAddString('', length, type);

        this.log(arg, _type);
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

        // для DomComponent компонента и функции hhh.dom.elementGet - await fn.call(self, 'dom div span', 'querySelector', document);
        if (isAwait) {
            await fn.call(self, ...args);
        } else {
            fn.call(self, ...args);
        }
        const end = new Date().getTime();

        console.log( `Время выполнения функции "${fn.name}" равно ${end - start} миллисекунд`);
    }

    /**
     * ДЛЯ ПРОМИСОВ РАБОТАЕТ НЕ КОРРЕКТНО
     */
    public getFunctionName() {
        // tslint:disable-next-line:prefer-const
        const err = new Error().stack;
        // tslint:disable-next-line:one-variable-per-declaration
        let emp, txt_fun, fun;

        emp = ' - АНОНИМНАЯ';
        if (this.browser.getBrowser().browser.toLowerCase() === 'chrome') {
            fun = err.split('\n')[2].split(' ')[5];
            if (fun !== 'Object.<anonymous>') {
                txt_fun = err.split('\n')[2].split(' ')[5];
            } else {
                txt_fun = emp;
            }

            return txt_fun;
        } else {
            fun = err.split('\n')[1].split('@')[0];
            if (fun !== '') {
                txt_fun = err.split('\n')[1].split('@')[0];
            } else {
                txt_fun = emp;
            }

            return txt_fun;
        }
    }
}
