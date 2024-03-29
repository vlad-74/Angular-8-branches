import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
    private readonly destroyed$ = new Subject();
    private currentAppSnapshot;

    public constructor(
    ) {
    }

    /* Подписывемся на appSnapshot$*/
    public async ngOnInit() {
        console.log('-global.window._h--', hhh.unique.generateUniqueString());

        this.checkDates();
        this.checkArray();
        console.log('+++++++', await hhh.jsonService.getAssetsJsonData('i18n/en.json'));
    }

    public checkDates() {
        const date1 = new Date('2/07/2023');
        const date2 = new Date('3/07/2023');

        console.log('---hhh.date.getDifferenceDays', hhh.date.getDifferenceDays(date1, date2));
        console.log('---hhh.date.getDateWeekNumber', hhh.date.getDateWeekNumber());
        console.log('---hhh.date.createDateByNumbers', hhh.date.createDateByNumbers(2023, 2, 24));

        console.log('---!!!!!', hhh.array.randomItemFromArray(hhh.array.getArrayFromTo(11, 22)));
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    private _log(arr: any[]) {
        hhh.common.log(arr);
    }

    private checkArray() {
        const arr = [1, 2, 3, 4, 5];
        const arr1 = [10, 12, 13, 14, 15, 15.6];
        const arr2 = [ ...arr, ...arr1];
        const arr3 = [ arr, arr1 ];

        console.log('---arr.max()', arr['max']());
        console.log('---arr.min()', arr['min']());
        console.log('---arr2.max()', arr2['max']());
        console.log('---getMin', hhh.array.getMin(arr1));
        console.log('---getMax', hhh.array.getMax(arr1));
        console.log('---getFunctionName', hhh.common.getFunctionName());
    }
}
