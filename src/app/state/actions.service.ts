/*
  ОСНОВНЫЕ ДЕЙСТВИЯ ПРИЛОЖЕНИЯ
    1. сначала изменение стейта
    2. затем запуск actions - для связки между компонентами
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActionsService {
    public appActions: BehaviorSubject<any> = new BehaviorSubject({});

    public runAppActions(action): void {
        this.appActions.next(action);
    }
}
