/*
  ОСНОВНЫЕ ДЕЙСТВИЯ ПРИЛОЖЕНИЯ
    1. сначала изменение стейта
    2. затем запуск actions - для связки между компонентами
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActionsService {
    public appActions: BehaviorSubject<any> = new BehaviorSubject({ ActionsService: 5 });

    public runAppActions(action): any {
        this.appActions.next(action);
    }
}
