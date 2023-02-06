import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from '@developer/example/common/common.component';

const routes: Routes = [
    {
        path: '',
        component: CommonComponent,
        data: {
            name: 'developer',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class DeveloperRouting {
}
