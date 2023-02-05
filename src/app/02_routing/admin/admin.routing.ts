import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@modules/01_module-screen/admin/admin/admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        data: {
            name: 'admin',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class AdminRouting {
}
