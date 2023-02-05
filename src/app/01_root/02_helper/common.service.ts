/* Общие функции. Для работы с логикой */

import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {
    protected logСоunt = 0;

    /*
     Задержка во времени (Аналог есть в DomService)
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

    /* Отписываемся от подписок */
    public log(arg) {
        if (!environment.production) {
            this.logСоunt++;
            console.log('log ====================================================== ' + this.logСоunt, ...arg);
        }
    }
}
