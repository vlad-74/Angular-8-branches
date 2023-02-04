import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [PlayerComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class PlayerModule {
}
