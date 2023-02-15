import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { DeveloperInfoComponent } from '@developer/developer-info.component';
import { TestComponent } from './test/test.component';
import { InfoComponent } from '@developer/examples/info/info.component';
import { InterComponent } from '@developer/examples/inter/inter.component';
import { SnapshotComponent } from '@developer/examples/app-snapshot/snapshot.component';
import { ThemeComponent } from '@developer/examples/theme/theme.component';
import { LoaderComponent2 } from '@developer/examples/loader/loader.component';

@NgModule({
    declarations: [
        DeveloperInfoComponent,
        TestComponent,
        InfoComponent,
        InterComponent,
        SnapshotComponent,
        ThemeComponent,
        LoaderComponent2,
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
