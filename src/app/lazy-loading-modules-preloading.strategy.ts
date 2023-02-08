import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import get from 'lodash-es/get';

@Injectable()
export class LazyLoadingModulesPreloadingStrategy implements PreloadingStrategy {

    public preload(route: Route, load: () => Observable<any>): Observable<any> {
        return get(route, 'data.preload', false) === true
            ? load()
            : of(null);
    }
}
