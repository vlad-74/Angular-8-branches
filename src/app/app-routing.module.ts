import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadingRoutes } from './lazy-loading-routes';

@NgModule({
    imports: [
        RouterModule.forRoot(LazyLoadingRoutes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
