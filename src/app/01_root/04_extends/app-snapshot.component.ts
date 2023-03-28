import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppSnapshotService } from '@checkpoints/01_state-emitters/app-snapshot.service';

/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ
 *
 * при наследовании получают
 * @param currentAppSnapshot - состояние приложения
 */
export abstract class AppSnapshotComponent {
    public currentAppSnapshot;
    private readonly destroyed$ = new Subject();

    protected constructor(
        public snapShot: AppSnapshotService,
    ) {
        this.snapShot.appSnapshot$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(
                appSnapshot => {
                    this.currentAppSnapshot = appSnapshot;
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
