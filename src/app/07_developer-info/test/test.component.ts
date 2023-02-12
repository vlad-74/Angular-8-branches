import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from '@helper/helper.service';
import { ThemeService } from '@state/theme.service';
import { AppSnapshotService } from '@state/app-snapshot.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
    private readonly destroyed$ = new Subject();
    private currentAppSnapshot;
    public name = 'Translation';

    public constructor(
        public translate: TranslateService,
        private _h: HelperService,
        private _theme: ThemeService,
        private _snapShot: AppSnapshotService,
    ) {
    }

    /* Подписывемся на appSnapshot$*/
    public ngOnInit() {
        this.translate.addLangs(['en', 'fr', 'vi']);
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang();

        this.translate.use(browserLang.match(/en|fr|vi/) ? browserLang : 'en');

        console.log(browserLang);
        // =========================================================

        this._snapShot.appSnapshot$
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
        // this._log(['=======', await this._h.dom.getElement('test')]);

        setTimeout(() => {
            this._theme.darkTheme();
        }, 2000);
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
