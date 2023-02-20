import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from '@helper/helper.service';
import { ThemeService } from '@state/theme.service';
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
        private _theme: ThemeService,
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

        this.testDom().then();
        console.log('+++++++', await this._h.jsonService.getAssetsJsonData('i18n/en.json'));
    }

    public async testDom() {
        const el = await this._h.dom.getElement('test div');

        if (!this._h.dom.addClassToElement(el,  'red')) {
            console.log('еще одна попытка' );
        } else {
            console.log('getParentElement', this._h.dom.getParentElement(el));
            console.log('getNextSiblingElement', this._h.dom.getNextSiblingElement(el));
            console.log('getPreviousSiblingElement', this._h.dom.getPreviousSiblingElement(el));
            console.log('getChildrenOfGivenElement', this._h.dom.getChildrenOfGivenElement(el));
        }
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
