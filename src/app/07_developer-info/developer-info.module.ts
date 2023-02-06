import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DeveloperInfoComponent } from '@developer/developer-info.component';
import { CommonComponent } from '@developer/example/common/common.component';

@NgModule({
    declarations: [
        DeveloperInfoComponent,
        CommonComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class DeveloperInfoModule {
}
