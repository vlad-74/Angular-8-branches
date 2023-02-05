import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitComponent } from '@modules/01_module-screen/exit/exit/exit.component';

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
