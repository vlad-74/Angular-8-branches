import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingRoutes } from './routing/lazy-loading-routes';

@NgModule({
    imports: [
        RouterModule.forRoot(LazyLoadingRoutes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
