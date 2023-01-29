import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../modules/not-found/not-found/not-found.component';

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
