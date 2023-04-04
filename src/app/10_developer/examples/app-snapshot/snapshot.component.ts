import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckpointsComponent } from '@helper/extends/checkpoints.component.ts';
import { CheckpointsService } from '@checkpoints/checkpoints.service';

@Component({
    selector: 'snapshot',
    templateUrl: './snapshot.component.html',
    styleUrls: ['./snapshot.component.scss'],
})
export class SnapshotComponent extends CheckpointsComponent implements OnInit, OnDestroy {

    public constructor(
        public checkpoints: CheckpointsService,
    ) {
        super(
            checkpoints,
            { type: 'default', isGlobalLog: true },
            { px: 1, isGlobalOutline: true },
        );
        // если не нужно логирование - super(snapShot, { type: '', isGlobalLog: false }, { px: 1, isGlobalOutline: true });
        // если не нужно outline - super(snapShot, { type: 'default', isGlobalLog: true }, { px: 0, isGlobalOutline: false });
    }

    /* Подписывемся на appSnapshot$*/
    public ngOnInit() {
        console.log('---this.checkpoints.watcher', this.checkpoints.watcher);
    }

    public ngOnDestroy(): void {
        this.onDestroy();
    }
}
