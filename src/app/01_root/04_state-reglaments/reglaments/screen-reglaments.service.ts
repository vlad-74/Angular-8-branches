import { Inject, Injectable } from '@angular/core';
import { HelperService } from '@helper/helper.service';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScreenReglamentsService {

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        private _h: HelperService,
    ) {
    }

    // в зависимости от размера экрана задаются высоты, ширины, font-size и т.д.
    public setScreen(): void {
        const res = this._h.screen.checkScreen();
        const values = [['--vw', res.vw], ['--vh', res.vh], ['--dpi', res.dpi]];

        values.forEach(item => {
            this.document.documentElement.style.setProperty( String(item[0]), String(item[1]) );
        });
    }
}
