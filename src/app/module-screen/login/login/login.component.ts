import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../../../helper/helper.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppSnapshotService } from '../../../state/app-snapshot.service';
import { ThemeService } from '../../../state/theme.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    private readonly destroyed$ = new Subject();
    private currentAppSnapshot;

    public constructor(
        private _h: HelperService,
        private _theme: ThemeService,
        private _snapShot: AppSnapshotService,
    ) {
    }

    /* Подписывемся на appSnapshot*/
    public ngOnInit() {
        this._snapShot.appSnapshot
            .pipe(takeUntil(this.destroyed$))
            .subscribe(
                appSnapshot => {
                    this.currentAppSnapshot = appSnapshot;
                },
                error => console.log('login - error', error),
            );

        this.test().then();
    }

    public async test() {
        // console.log('+++++++', this._h.screen.checkScreen());
        // this._log(['=======']);
        // this._log(['=======', await this._h.dom.getElement('login')]);

        setTimeout(() => { this._theme.darkTheme(); }, 2000);
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
