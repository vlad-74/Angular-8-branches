import { NgModule } from '@angular/core';
import { DeveloperRouting } from './developer.routing';
import { DeveloperModule } from '@developer/developer.module';

@NgModule({
    imports: [
        DeveloperRouting,
        DeveloperModule,
    ],
})
export class RoutingDeveloperModule {
}
