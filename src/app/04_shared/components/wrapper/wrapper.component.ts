/* WrapperComponent - компонент, который управляет экранными модулями (01_module-screen) */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSnapshotService } from '@checkpoints/01_state-emitters/app-snapshot.service';
import { AppSnapshotComponent } from '@root/04_extends/app-snapshot.component';
import { ThemeService } from '@checkpoints/01_state-emitters/theme.service';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent extends AppSnapshotComponent implements OnInit, OnDestroy {
    public isHiddenMenu = false;
    private _activeRouteHidden = ['developer', 'sleep', 'not-found'];

    public constructor(
        public snapShot: AppSnapshotService,
        private _theme: ThemeService,
    ) {
        super(snapShot, 'default');  // если не нужно логирование - super(snapShot, '');
    }

    /**
     * при наследовании получают:
     * - КЛАСС AppSnapshotComponent - подписка на состояние приложения
     * - КЛАСС LogComponent - логирование компонента
     * this.currentAppSnapshot пришел из наследуемого класса AppSnapshotComponent
     */
    public ngOnInit() {
        const index = this.currentAppSnapshot.appHistory.length - 1;
        const currentRoute = this.currentAppSnapshot.appHistory[index].split('/')[1];

        this.isHiddenMenu = this._activeRouteHidden.includes(currentRoute);

        // setTimeout(() => {
        //     this._theme.darkTheme();
        // }, 2000);
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.onDestroy();
    }
}
