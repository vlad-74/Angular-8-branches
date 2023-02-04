/* Сервис по смене тем (светлая/темная) приложения */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
    public isTheme: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public darkTheme(): void {
        this.isTheme.next(true);
    }

    public lightTheme(): void {
        this.isTheme.next(false);
    }
}
