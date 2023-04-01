import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppSnapshotService } from '@checkpoints/01_state-emitters/app-snapshot.service';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    private readonly destroyed$ = new Subject();
    private currentAppSnapshot;

    public constructor(
        private _snapShot: AppSnapshotService,
    ) {}

    public ngOnInit() {
        if (this._snapShot) {
            this._snapShot.appSnapshot$
                .pipe(takeUntil(this.destroyed$))
                .subscribe(
                    appSnapshot => {
                        console.log('--==================-', appSnapshot);
                        this.currentAppSnapshot = appSnapshot;
                    },
                    error => console.log('login - error', error),
                );
        }

    }
}
