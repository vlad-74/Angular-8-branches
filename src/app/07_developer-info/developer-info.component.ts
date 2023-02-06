import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'developer-info',
    templateUrl: './developer-info.component.html',
    styleUrls: [ './developer-info.component.scss' ],
})
export class DeveloperInfoComponent implements OnInit {
    public title = 'competitions';

    public constructor() {
    }

    public ngOnInit() {
    }

}
