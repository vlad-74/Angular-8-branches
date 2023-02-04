/*
  ОСНОВНЫЕ ДАННЫЕ ПРИЛОЖЕНИЯ
    1. сначала изменение стейта
    2. затем запуск actions
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
    public appState: BehaviorSubject<any> = new BehaviorSubject({ StateService: 6 });

    public newAppState(state): any {
        this.appState.next(state);
    }
}
