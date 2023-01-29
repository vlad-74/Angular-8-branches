import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../modules/login/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            name: 'login',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class LoginRouting {
}
