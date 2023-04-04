import { Component, OnInit } from '@angular/core';
import { CheckpointsService } from '@checkpoints/checkpoints.service';

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
        public checkpoints: CheckpointsService,
    ) {
    }

    public ngOnInit() {
        setTimeout(() => {
            this.checkpoints.themeDark();
        }, 2000);
    }
}
