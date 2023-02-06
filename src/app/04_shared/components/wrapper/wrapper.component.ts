/* WrapperComponent - компонент, который управляет экранными модулями (01_module-screen) */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
    styles: [
        ':host { width: 100%; height: 100%; overflow: hidden;}',
    ],
})
export class WrapperComponent implements OnInit {

    public ngOnInit() {
    }

}
