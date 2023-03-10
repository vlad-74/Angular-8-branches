import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerComponent } from '@modules/01_module-screen/viewer/viewer/viewer.component';

const routes: Routes = [
    {
        path: '',
        component: ViewerComponent,
        data: {
            name: 'viewer',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class ViewerRouting {
}
