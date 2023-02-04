import { NgModule } from '@angular/core';
import { PlayerRouting } from './player.routing';
import { PlayerModule } from '../../module-screen/player/player.module';

@NgModule({
    imports: [
        PlayerRouting,
        PlayerModule,
    ],
})
export class RoutingPlayerModule {
}
