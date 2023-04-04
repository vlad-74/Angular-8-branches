import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadingRoutes } from '@routing/lazy-loading-routes';
import { LazyLoadingModulesPreloadingStrategy } from '@routing/lazy-loading-modules-preloading.strategy';

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
