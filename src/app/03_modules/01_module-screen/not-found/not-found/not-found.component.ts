import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    styles: [
        ':host { width: 100%; height: 100%; overflow: hidden;}',
    ],
})
export class NotFoundComponent implements OnInit {

    public constructor() {
    }

    public ngOnInit() {
    }

}
