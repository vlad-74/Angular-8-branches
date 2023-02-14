/* Функции для работы с уникальными значениями */

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UniqueService {

    /* Создать новый guid */
    public GenerateGuid(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    /* Создать уникальную строку */
    public GenerateUniqueString(): string {
        return (+new Date()).toString(16);
    }

    /* Глубокое копирование через Json */
    public CloneDeepViaJson<T>(source: T): T {
        return JSON.parse(JSON.stringify(source)) as T;
    }

}
