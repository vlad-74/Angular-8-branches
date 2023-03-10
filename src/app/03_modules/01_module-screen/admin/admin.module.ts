import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class AdminModule {
}
