/*
  ЭКРАН ПРИЛОЖЕНИЯ
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from '@helper/helper.service';

@Injectable({ providedIn: 'root' })
export class ScreenService {
    public appScreen$: BehaviorSubject<any> = new BehaviorSubject(hhh.screen.checkScreen());

    public constructor(
        private _h: HelperService,
    ) {
    }

    public setAppScreen(screen): any {
        this.appScreen$.next(screen);
    }
}
