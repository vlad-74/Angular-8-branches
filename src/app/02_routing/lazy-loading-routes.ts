import { Routes } from '@angular/router';
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';

export const LazyLoadingRoutes: Routes = [
    {
        path: '',
        component: WrapperComponent,
    },
    {
        path: 'admin',
        component: WrapperComponent,
        loadChildren: () => import('@routing/admin/routing-admin.module').then(m => m.RoutingAdminModule),
        data: { preload: true },
    },
    {
        path: 'exit',
        component: WrapperComponent,
        loadChildren: () => import('@routing/exit/routing-exit.module').then(m => m.RoutingExitModule),
    },
    {
        path: 'login',
        component: WrapperComponent,
        loadChildren: () => import('@routing/login/routing-login.module').then(m => m.RoutingLoginModule),
    },
    {
        path: 'player',
        component: WrapperComponent,
        loadChildren: () => import('@routing/player/routing-player.module').then(m => m.RoutingPlayerModule),
    },
    {
        path: 'referee',
        component: WrapperComponent,
        loadChildren: () => import('@routing/referee/routing-referee.module').then(m => m.RoutingRefereeModule),
    },
    {
        path: 'viewer',
        component: WrapperComponent,
        loadChildren: () => import('@routing/viewer/routing-viewer.module').then(m => m.RoutingViewerModule),
    },
    {
        path: 'developer',
        component: WrapperComponent,
        loadChildren: () => import('@routing/developer/routing-developer.module').then(m => m.RoutingDeveloperModule),
    },
    {
        path: 'sleep',
        component: WrapperComponent,
        loadChildren: () => import('@routing/sleep/routing-sleep.module').then(m => m.RoutingSleepModule),
    },
    {
        path: '**',
        component: WrapperComponent,
        loadChildren: () => import('@routing/not-found/routing-not-found.module').then(m => m.RoutingNotFoundModule),
    },
];
