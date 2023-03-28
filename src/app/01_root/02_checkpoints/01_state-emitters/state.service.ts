/*
  ОСНОВНЫЕ ДАННЫЕ ПРИЛОЖЕНИЯ
    1. сначала изменение стейта
    2. затем запуск actions
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IState } from '@interfaces/helper.interfaces';

@Injectable({ providedIn: 'root' })
export class StateService {
    private _appStartState: IState = {
        visitorHasLogin: false,
        roles: ['visitor'],
        participants: [],
        cupsReferee: [],
        cupsParticipants: [],
        cupsFounders: [],
    };

    public appState$: BehaviorSubject<any> = new BehaviorSubject(this._appStartState);

    public newAppState(state: IState): any {
        this.appState$.next(state);
    }
}
