/* Функции для работы с экраном */
import { IScreen } from '@interfaces/helper.interfaces';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScreenService {
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

        return { vw, vh, dpi };
    }
}
