import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExitComponent } from './exit/exit.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [ExitComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class ExitModule {
}
