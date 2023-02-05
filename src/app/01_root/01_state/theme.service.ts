/* Сервис по смене тем (светлая/темная) приложения */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    public isTheme$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public darkTheme(): any {
        this.isTheme$.next(true);
    }

    public lightTheme(): any {
        this.isTheme$.next(false);
    }
}
