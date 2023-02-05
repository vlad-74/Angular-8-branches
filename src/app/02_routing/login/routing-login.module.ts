import { NgModule } from '@angular/core';
import { LoginRouting } from './login.routing';
import { LoginModule } from '@modules/01_module-screen/login/login.module';

@NgModule({
    imports: [
        LoginRouting,
        LoginModule,
    ],
})
export class RoutingLoginModule {
}
