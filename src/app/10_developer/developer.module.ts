import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { DeveloperComponent } from '@developer/developer.component';
import { TestComponent } from './test/test.component';
import { InfoComponent } from '@developer/examples/info/info.component';
import { InterComponent } from '@developer/examples/inter/inter.component';
import { SnapshotComponent } from '@developer/examples/app-snapshot/snapshot.component';
import { ThemeComponent } from '@developer/examples/theme/theme.component';
import { LoaderComponent2 } from '@developer/examples/loader/loader.component';
import { DomComponent } from '@developer/examples/dom/dom.component';
import { AnimationComponent } from '@developer/examples/animation/animation.component';
import { ScreenComponent } from '@developer/examples/screen/screen.component';

@NgModule({
    declarations: [
        DeveloperComponent,
        TestComponent,
        InfoComponent,
        InterComponent,
        SnapshotComponent,
        ThemeComponent,
        LoaderComponent2,
        DomComponent,
        AnimationComponent,
        ScreenComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        TranslateModule,
    ],
})
export class DeveloperModule {
}
