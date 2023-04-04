/* WrapperComponent - компонент, который управляет экранными модулями (01_module-screen) */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckpointsComponent } from '@helper/extends/checkpoints.component.ts';
import { CheckpointsService } from '@checkpoints/checkpoints.service';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent extends CheckpointsComponent implements OnInit, OnDestroy {
    public isHiddenMenu = false;
    private _activeRouteHidden = ['developer', 'sleep', 'not-found'];

    public constructor(
        public checkpoints: CheckpointsService, // для передачи в super
    ) {
        super(
            checkpoints,
            { type: 'default', isGlobalLog: true },
            { px: 1, isGlobalOutline: true },
        );
        // если не нужно логирование - super(snapShot, { type: '', isGlobalLog: false }, { px: 1, isGlobalOutline: true });
        // если не нужно outline - super(snapShot, { type: 'default', isGlobalLog: true }, { px: 0, isGlobalOutline: false });
    }

    /**
     * при наследовании получают:
     * - КЛАСС CheckpointsComponent - подписка на состояние приложения
     * - КЛАСС LogComponent - логирование компонента - если в конструктор передан параметр logTyp:string
     * - КЛАСС OutlineComponent - outline (css) для компонента - если в конструктор передан параметр px:number
     * this.$checkpoints пришел из наследуемого класса CheckpointsComponent
     */
    public ngOnInit() {
        const index = this.$checkpoints.appRouterHistory.length - 1;

        if (index !== -1) {
            const currentRoute = this.$checkpoints.appRouterHistory[index].split('/')[1];

            this.isHiddenMenu = this._activeRouteHidden.includes(currentRoute);
        }

        // setTimeout(() => {
        //     this._theme.darkTheme();
        // }, 2000);
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.onDestroy();
    }
}
