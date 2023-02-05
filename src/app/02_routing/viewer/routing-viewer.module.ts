import { NgModule } from '@angular/core';
import { ViewerRouting } from './viewer.routing';
import { ViewerModule } from '@modules/01_module-screen/viewer/viewer.module';

@NgModule({
    imports: [
        ViewerRouting,
        ViewerModule,
    ],
})
export class RoutingViewerModule {
}
