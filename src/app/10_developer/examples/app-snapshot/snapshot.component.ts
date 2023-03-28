import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppSnapshotService } from '@checkpoints/01_state-emitters/app-snapshot.service';

@Component({
    selector: 'snapshot',
    templateUrl: './snapshot.component.html',
    styleUrls: ['./snapshot.component.scss'],
})
export class SnapshotComponent implements OnInit, OnDestroy {
    private readonly destroyed$ = new Subject();
    private currentAppSnapshot;

    public constructor(
        private _snapShot: AppSnapshotService,
    ) {
    }

    /* Подписывемся на appSnapshot$*/
    public ngOnInit() {
        this._snapShot.appSnapshot$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(
                appSnapshot => {
                    this.currentAppSnapshot = appSnapshot;
                },
                error => console.log('login - error', error),
            );
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
