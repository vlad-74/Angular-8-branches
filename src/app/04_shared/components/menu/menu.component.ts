import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LogComponent } from '@helper/extends/log.component';
import { CheckpointsService } from '@checkpoints/checkpoints.service';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends LogComponent implements OnInit {
    private readonly destroyed$ = new Subject();

    public constructor(
        public _checkpoints: CheckpointsService,
    ) {
        super({ type: '', isGlobalLog: true }, { px: 1, isGlobalOutline: true });
    }

    public ngOnInit() {
    }
}
