import { NgModule } from '@angular/core';
import { NotFoundRouting } from './not-found.routing';
import { NotFoundModule } from '../../modules/not-found/not-found.module';

@NgModule({
    imports: [
        NotFoundRouting,
        NotFoundModule,
    ],
})
export class RoutingNotFoundModule {
}
