import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppSnapshotService } from '@checkpoints/01_state-emitters/app-snapshot.service';
import { LogComponent } from '@helper/extends/log.component';
import { ISnapshot } from '@interfaces/snapshot.interface';
import { ILogParam, IOutlineParam } from '@interfaces/helper.interface';

/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ
 *
 * при наследовании получают
 * @param currentAppSnapshot - состояние приложения
 */
export abstract class AppSnapshotComponent extends LogComponent {
    public currentAppSnapshot: ISnapshot;
    private readonly destroyed$ = new Subject();

    protected constructor(
        public snapShot: AppSnapshotService,
        public logParam: ILogParam,
        public outlineParam: IOutlineParam,
    ) {
        super(logParam, outlineParam);

        this.snapShot.appSnapshot$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(
                appSnapshot => {
                    this.currentAppSnapshot = appSnapshot;
                    /**
                     * логирование из наследуемого класса LogComponent
                     * при this.logParam.type === 'default' передавать appSnapshot приложения
                     */
                    if (this.logParam.type) { this.log(this.currentAppSnapshot); }
                },
                error => console.log('login - error', error),
            );
    }

    /* Отписываемся от подписок */
    public onDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
