import { NgModule } from '@angular/core';
import { LoginRouting } from './login.routing';
import { LoginModule } from '../../module-screen/login/login.module';

@NgModule({
    imports: [
        LoginRouting,
        LoginModule,
    ],
})
export class RoutingLoginModule {
}