import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefereeComponent } from '@modules/01_module-screen/referee/referee/referee.component';

const routes: Routes = [
    {
        path: '',
        component: RefereeComponent,
        data: {
            name: 'referee',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class RefereeRouting {
}
