/*
  ОСНОВНЫЕ ДЕЙСТВИЯ ПРИЛОЖЕНИЯ
    1. сначала изменение стейта
    2. затем запуск actions - для связки между компонентами
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAction } from '@interfaces/helper.interfaces';

@Injectable({ providedIn: 'root' })
export class ActionsService {
    private _appActions: IAction = null;
    public appActions$: BehaviorSubject<any> = new BehaviorSubject(this._appActions);

    public runAppActions(action: IAction): void {
        if (action) {
            this.appActions$.next(action);
        }
    }
}
