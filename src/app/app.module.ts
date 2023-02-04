import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperInfoComponent } from './developer-info/developer-info.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './module-screen/login/login.module';
import { NotFoundModule } from './module-screen/not-found/not-found.module';

@NgModule({
    declarations: [
        AppComponent,
        DeveloperInfoComponent,
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
