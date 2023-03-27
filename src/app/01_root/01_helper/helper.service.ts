/* Группа сервисов для разработчика */

import { Injectable } from '@angular/core';
import { ArrayService } from '@helper/array.service';
import { CommonService } from '@helper/common.service';
import { DomService } from '@helper/dom.service';
import { AssetsJsonService } from '@helper/assets-json.service';
import { ScreenService } from '@helper/screen.service';
import { UniqueService } from '@helper/unique.service';
import { StorageService } from '@helper/storage.service';
import { ObjectService } from '@helper/object.service';
import { StringService } from '@helper/string.service';
import { DateService } from '@helper/date.service';
import { BrowserService } from '@helper/browser.service';

/**
 * ИСПОЛЬЗОВАНИЕ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ
 * БЕЗ ИСПОЛЬЗОВАНИЯ:
 * - ИМПОРТА (в компоненте)
 * - ДЕКЛАРАЦИЙ (в компоненте)
 * - this (в компоненте)
 *
 * 1 шаг - декларация глобальных переменных
 * @example => declare global {
 *     interface Window {
 *         hhh: HelperService;
 *     }
 * }
 * @example => declare global {
 *     const hhh: HelperService;
 * }
 * в src\polyfills.ts
 *
 * 2 шаг - присвоение глобальной переменной сервиса
 * @example => window.hhh = this;
 * в src\app\01_root\01_helper\helper.service.ts
 *
 * 3 шаг - использование глобальной переменной
 * @example => hhh.unique.generateUniqueString()
 * например в src\app\06_developer\test\test.component.ts
 */
@Injectable({ providedIn: 'root' })
export class HelperService {

    public constructor(
        public array: ArrayService,
        public common: CommonService,
        public dom: DomService,
        public jsonService: AssetsJsonService,
        public screen: ScreenService,
        public unique: UniqueService,
        public storage: StorageService,
        public object: ObjectService,
        public string: StringService,
        public date: DateService,
        public browser: BrowserService,
    ) {
        /**
         * если нужна ЕЩЕ "глобальная переменная" типа hhh
         * реализацию смотри в polyfills.ts
         */
        window.hhh = this;
    }
}
