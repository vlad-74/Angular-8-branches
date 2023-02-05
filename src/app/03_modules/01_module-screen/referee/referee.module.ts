import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefereeComponent } from './referee/referee.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [RefereeComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class RefereeModule {
}
