/*
  ОСНОВНЫЕ ДАННЫЕ ПРИЛОЖЕНИЯ
    1. сначала изменение стейта
    2. затем запуск actions
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {
    public appState: BehaviorSubject<any> = new BehaviorSubject({});

    public newAppState(state): void {
        this.appState.next(state);
    }
}
