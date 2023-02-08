import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DeveloperInfoComponent } from '@developer/developer-info.component';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DeveloperInfoComponent,
        TestComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
    ],
})
export class DeveloperInfoModule {
}
