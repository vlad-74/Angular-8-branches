import { NgModule } from '@angular/core';
import { AdminRouting } from './admin.routing';
import { AdminModule } from '../../modules/admin/admin.module';

@NgModule({
    imports: [
        AdminRouting,
        AdminModule,
    ],
})
export class RoutingAdminModule {
}
