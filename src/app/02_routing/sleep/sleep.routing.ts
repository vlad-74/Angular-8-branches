import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepComponent } from '@modules/01_module-screen/sleep/sleep/sleep.component';

const routes: Routes = [
    {
        path: '',
        component: SleepComponent,
        data: {
            name: 'sleep',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class SleepRouting {
}
