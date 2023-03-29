/* Функции для работы с экраном */
import { Injectable } from '@angular/core';
import { IScreen } from '@interfaces/helper.interface';
import { BrowserService } from '@helper/services/browser.service';

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

    /* Возвращает ширину, высоту, dpi, коэффиент, тип экрана и тип браузера в зависимости от размера экрана */
    public checkScreen(): IScreen {
        // const screenWidth = window.screen.width
        // const screenHeight = window.screen.height

        const vw = window.innerWidth + 'px';
        const vh = window.innerHeight + 'px';
        const dpi = window.devicePixelRatio;

        const coefficient = window.innerWidth / window.innerHeight;
        const typeScreen = coefficient >= 1 ? 'tablet' : 'mobile';
        const orientation = window.screen.orientation;

        return <IScreen> { vw, vh, dpi, coefficient, typeScreen, browser: this.browser.getBrowser(), orientation };
    }

    /* Запустить полноэкранный режим в зависимости от браузера */
    private _launchFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    /* Выйти из полноэкранного режима в зависимости от браузера */
    private _exitFullscreen(document) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    /* Выйти из полноэкранного режима */
    public setExitFullscreen() {
        this._exitFullscreen(document);
    }

    /* Запустить полноэкранный режим */
    public setFullscreen() {
        this._launchFullscreen(document.documentElement);
    }
}
