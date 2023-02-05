/* Сервис отслеживания активности приложения */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserActivityService {
    public isSleep$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public userSleep(): any {
        this.isSleep$.next(true);
    }

    public userWork(): any {
        this.isSleep$.next(false);
    }
}
