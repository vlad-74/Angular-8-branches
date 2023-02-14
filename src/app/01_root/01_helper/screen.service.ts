/* Функции для работы с экраном */
import { Injectable } from '@angular/core';
import { IScreen } from '@interfaces/helper.interfaces';
import { BrowserService } from '@helper/browser.service';

@Injectable({ providedIn: 'root' })
export class ScreenService {

    public constructor(
        public browser: BrowserService,
    ) {
    }

    /* iOS detection */
    public iOS() {
        return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod',
            ].includes(navigator.platform)
            || (navigator.userAgent.includes('Mac') && 'ontouchend' in document); // iPad on iOS 13 detection
    }

    /* Возвращает ширину, высоту и dpi в зависимости от размера экрана */
    public checkScreen(): IScreen {
        // const screenWidth = window.screen.width
        // const screenHeight = window.screen.height

        const vw = window.innerWidth + 'px';
        const vh = window.innerHeight + 'px';
        const dpi = window.devicePixelRatio;

        const coefficient = window.innerWidth / window.innerHeight;
        const typeScreen = coefficient >= 1 ? 'tablet' : 'mobile';

        return <IScreen> { vw, vh, dpi, coefficient, typeScreen, browser: this.browser.getBrowser() };
    }
}
