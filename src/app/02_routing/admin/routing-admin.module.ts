import { NgModule } from '@angular/core';
import { AdminRouting } from './admin.routing';
import { AdminModule } from '@modules/01_module-screen/admin/admin.module';

@NgModule({
    imports: [
        AdminRouting,
        AdminModule,
    ],
})
export class RoutingAdminModule {
}
