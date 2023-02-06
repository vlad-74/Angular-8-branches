import { NgModule } from '@angular/core';
import { DeveloperRouting } from './developer.routing';
import { DeveloperInfoModule } from '@developer/developer-info.module';

@NgModule({
    imports: [
        DeveloperRouting,
        DeveloperInfoModule,
    ],
})
export class RoutingDeveloperModule {
}
