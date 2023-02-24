import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from '@helper/helper.service';
import { AppSnapshotService } from '@state/app-snapshot.service';

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
    private readonly destroyed$ = new Subject();
    private currentAppSnapshot;

    public constructor(
        private _h: HelperService,
        private _snapShot: AppSnapshotService,
    ) {
    }

    /* Подписывемся на appSnapshot$*/
    public async ngOnInit() {
        this._snapShot.appSnapshot$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(
                appSnapshot => {
                    this.currentAppSnapshot = appSnapshot;
                },
                error => console.log('login - error', error),
            );

        this.checkDates();
        console.log('+++++++', await this._h.jsonService.getAssetsJsonData('i18n/en.json'));
    }

    public checkDates() {
        const date1 = new Date('2/07/2023');
        const date2 = new Date('3/07/2023');

        console.log('---this._h.date.getDifferenceDays', this._h.date.getDifferenceDays(date1, date2));
        console.log('---this._h.date.getDateWeekNumber', this._h.date.getDateWeekNumber());
        console.log('---this._h.date.createDateByNumbers', this._h.date.createDateByNumbers(2023, 2, 24));
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    /* Отписываемся от подписок */
    private _log(arr: any[]) {
        this._h.common.log(arr);
    }
}
