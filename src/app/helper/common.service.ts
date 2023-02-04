/* Общие функции. Для работы с логикой */

export class CommonService {
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
}
