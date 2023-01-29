import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitComponent } from '../../modules/exit/exit/exit.component';

const routes: Routes = [
    {
        path: '',
        component: ExitComponent,
        data: {
            name: 'exit',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class ExitRouting {
}
