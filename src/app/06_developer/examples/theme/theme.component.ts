import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@state/theme.service';

@Component({
    selector: 'theme.component.ts',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss'],
    styles: [
        ':host { width: 100%; height: 100%; overflow: hidden;}',
    ],
})
export class ThemeComponent implements OnInit {

    public constructor(
        private _theme: ThemeService,
    ) {
    }

    public ngOnInit() {
        setTimeout(() => {
            this._theme.darkTheme();
        }, 2000);
    }
}
