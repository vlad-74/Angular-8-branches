/* Функции для работы с массивами */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AssetsJsonService {
    public constructor(
        private http: HttpClient,
    ) {}

    public getAssetsJsonData(path) {
        return this.http.get('/assets/' + path).toPromise();
    }

}
