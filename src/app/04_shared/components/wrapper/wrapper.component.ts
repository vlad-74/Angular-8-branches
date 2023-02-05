/* WrapperComponent - компонент, который управляет экранными модулями (01_module-screen) */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {

    public constructor(
        private router: Router,
    ) {
    }

    public ngOnInit() {
        this.router.navigate(['login']).then();
    }

}
