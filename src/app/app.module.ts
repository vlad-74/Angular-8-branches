import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperInfoComponent } from './06_developer-info/developer-info.component';
import { SharedModule } from '@shared/shared.module';
import { LoginModule } from '@modules/01_module-screen/login/login.module';
import { NotFoundModule } from '@modules/01_module-screen/not-found/not-found.module';
import { CommonComponent } from './06_developer-info/example/common/common.component';

@NgModule({
    declarations: [
        AppComponent,
        DeveloperInfoComponent,
        CommonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        LoginModule,
        NotFoundModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
