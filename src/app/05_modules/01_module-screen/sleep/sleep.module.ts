import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepComponent } from './sleep/sleep.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [SleepComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class SleepModule {
}
