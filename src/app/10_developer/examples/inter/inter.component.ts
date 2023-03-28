import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'inter',
    templateUrl: './inter.component.html',
    styleUrls: ['./inter.component.scss'],
})
export class InterComponent implements OnInit {
    public name = 'Translation';

    public constructor(
        public translate: TranslateService,
    ) {
    }

    public ngOnInit() {
        this.translate.addLangs(['en', 'fr', 'vi']);
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang();

        this.translate.use(browserLang.match(/en|fr|vi/) ? browserLang : 'en');

        console.log(browserLang);
        // =========================================================

    }
}
