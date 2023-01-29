import { NgModule } from '@angular/core';
import { ViewerRouting } from './viewer.routing';
import { ViewerModule } from '../../modules/viewer/viewer.module';

@NgModule({
    imports: [
        ViewerRouting,
        ViewerModule,
    ],
})
export class RoutingViewerModule {
}
