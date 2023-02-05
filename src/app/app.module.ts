import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginModule } from '@modules/01_module-screen/login/login.module';
import { NotFoundModule } from '@modules/01_module-screen/not-found/not-found.module';
import { CommonComponent } from '@developer/example/common/common.component';
import { DeveloperInfoComponent } from '@developer/developer-info.component';

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
