import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@modules/01_module-screen/not-found/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent,
        data: {
            name: 'not-found',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class NotFoundRouting {
}
