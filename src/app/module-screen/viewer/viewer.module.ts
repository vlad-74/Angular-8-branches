import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [ViewerComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class ViewerModule {
}
