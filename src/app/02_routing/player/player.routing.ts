import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from '@modules/01_module-screen/player/player/player.component';

const routes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        data: {
            name: 'player',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class PlayerRouting {
}
