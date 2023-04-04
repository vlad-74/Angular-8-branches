import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'screen',
    templateUrl: './screen.component.html',
    styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit, OnDestroy {
    private readonly destroyed$ = new Subject();

    public constructor(
    ) {
    }

    /* Подписывемся на appSnapshot$*/
    public async ngOnInit() {
        this.checkScreen();
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    public orientationHandler(prefix) {
        const orientationProperty = prefix + (prefix === '' ? 'o' : 'O') + 'rientation';

        document.getElementById('orientation').textContent = screen[orientationProperty];
    }

    // public exitFullscreen() {
    //     if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //     } else if (document.mozCancelFullScreen) {
    //         document.mozCancelFullScreen();
    //     } else if (document.webkitExitFullscreen) {
    //         document.webkitExitFullscreen();
    //     } else if (document.msExitFullscreen) {
    //         document.msExitFullscreen();
    //     }
    // }

    // Функция, необходимая для просмотра блокировки в действии
    public launchFullscreen(element) {
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

    private checkScreen() {
        let select;
        const prefix = 'orientation' in screen ? '' :
            'mozOrientation' in screen ? 'moz' :
                'msOrientation' in screen ? 'ms' :
                    null;

        if (prefix === null) {
            document.getElementById('so-unsupported').classList.remove('hidden');

            ['lock-button', 'unlock-button'].forEach(elementId => {
                document.getElementById(elementId).setAttribute('disabled', 'disabled');
            });
        } else {
            const form = document.getElementById('form-orientation');

            select = document.getElementById('orientation-type');

            screen['addEventListener'](prefix + 'orientationchange',
                () => {
                    const orientationProperty = prefix + (prefix === '' ? 'o' : 'O') + 'rientation';

                    document.getElementById('orientation').textContent = screen[orientationProperty];
                });
        }

        document.getElementById('lock-button').addEventListener('click', event => {
                event.preventDefault();
                this.launchFullscreen(document.documentElement);

                setTimeout(() => {
                    screen[prefix + (prefix === '' ? 'l' : 'L') + 'ockOrientation'](select.value);
                }, 1);
        });

        document.getElementById('unlock-button').addEventListener('click', () => {
                // this.exitFullscreen();
                screen[prefix + (prefix === '' ? 'u' : 'U') + 'nlockOrientation']();
            });
        console.log('---window.screen.orientation', window.screen.orientation);

        this.orientationHandler(prefix);
    }

    public fullScreen() {
       hhh.screen.setFullscreen();
    }

    public exitFullScreen() {
        hhh.screen.setExitFullscreen();
    }
}
