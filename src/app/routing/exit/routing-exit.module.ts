import { NgModule } from '@angular/core';
import { ExitRouting } from './exit.routing';
import { ExitModule } from '../../module-screen/exit/exit.module';

@NgModule({
    imports: [
        ExitRouting,
        ExitModule,
    ],
})
export class RoutingExitModule {
}
