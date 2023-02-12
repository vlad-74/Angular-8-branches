import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperInfoComponent } from '@developer/developer-info.component';
import { TestComponent } from '@developer/test/test.component';
import { InfoComponent } from '@developer/examples/info/info.component';
import { InterComponent } from '@developer/examples/inter/inter.component';
import { SnapshotComponent } from '@developer/examples/app-snapshot/snapshot.component';

const routes: Routes = [
    {
        path: '',
        component: DeveloperInfoComponent,
        children: [
            {
                path: 'develop',
                component: DeveloperInfoComponent,
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
