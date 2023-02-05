import { NgModule } from '@angular/core';
import { ExitRouting } from './exit.routing';
import { ExitModule } from '@modules/01_module-screen/exit/exit.module';

@NgModule({
    imports: [
        ExitRouting,
        ExitModule,
    ],
})
export class RoutingExitModule {
}
