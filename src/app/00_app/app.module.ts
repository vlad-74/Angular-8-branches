import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/00_app/app.component';
import { AppRoutingModule } from '@app/00_app/app-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}