import { NgModule } from '@angular/core';
import { RefereeRouting } from './referee.routing';
import { RefereeModule } from '../../modules/referee/referee.module';

@NgModule({
    imports: [
        RefereeRouting,
        RefereeModule,
    ],
})
export class RoutingRefereeModule {
}
