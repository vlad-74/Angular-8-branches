import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperInfoComponent } from '@developer/developer-info.component';
import { TestComponent } from '@developer/test/test.component';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        data: { name: 'test' },
        children: [
            {
                path: 'develop',
                component: DeveloperInfoComponent,
            },
            {
                path: '',
                redirectTo: 'develop',
                pathMatch: 'full',
            },
            {
                path: 'test',
                component: TestComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class DeveloperRouting {
}
