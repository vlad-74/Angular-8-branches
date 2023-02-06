/*
  ЭКРАН ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenService {
    public appScreen$: BehaviorSubject<any> = new BehaviorSubject({ ScreenService: 5 });

    public setAppScreen(screen): any {
        this.appScreen$.next(screen);
    }
}
