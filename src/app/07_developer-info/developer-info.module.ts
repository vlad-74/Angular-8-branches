import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { DeveloperInfoComponent } from '@developer/developer-info.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        DeveloperInfoComponent,
        TestComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        TranslateModule,
    ],
})
export class DeveloperInfoModule {
}
