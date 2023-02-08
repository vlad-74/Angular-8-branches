import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadingRoutes } from './lazy-loading-routes';
import { LazyLoadingModulesPreloadingStrategy } from '@app/lazy-loading-modules-preloading.strategy';

@NgModule({
    imports: [
        RouterModule.forRoot(LazyLoadingRoutes, { preloadingStrategy: LazyLoadingModulesPreloadingStrategy }),
    ],
    providers: [
        LazyLoadingModulesPreloadingStrategy,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
