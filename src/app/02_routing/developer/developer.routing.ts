import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from '@developer/developer.component';
import { TestComponent } from '@developer/test/test.component';
import { InfoComponent } from '@developer/examples/info/info.component';
import { InterComponent } from '@developer/examples/inter/inter.component';
import { SnapshotComponent } from '@developer/examples/app-snapshot/snapshot.component';
import { ThemeComponent } from '@developer/examples/theme/theme.component';
import { LoaderComponent2 } from '@developer/examples/loader/loader.component';
import { DomComponent } from '@developer/examples/dom/dom.component';
import { AnimationComponent } from '@developer/examples/animation/animation.component';
import { ScreenComponent } from '@developer/examples/screen/screen.component';

const routes: Routes = [
    {
        path: '',
        component: DeveloperComponent,
        children: [
            {
                path: 'develop',
                component: DeveloperComponent,
            },
            {
                path: 'test',
                component: TestComponent,
            },
            {
                path: 'info',
                component: InfoComponent,
            },
            {
                path: 'internationalization',
                component: InterComponent,
            },
            {
                path: 'snapshot',
                component: SnapshotComponent,
            },
            {
                path: 'theme',
                component: ThemeComponent,
            },
            {
                path: 'loader',
                component: LoaderComponent2,
            },
            {
                path: 'dom',
                component: DomComponent,
            },
            {
                path: 'animation',
                component: AnimationComponent,
            },
            {
                path: 'screen',
                component: ScreenComponent,
            },
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class DeveloperRouting {
}
