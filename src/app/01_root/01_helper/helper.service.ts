/* Группа сервисов для разработчика */

import { Injectable } from '@angular/core';
import { ArrayService } from '@helper/services/array.service';
import { CommonService } from '@helper/services/common.service';
import { DomService } from '@helper/services/dom.service';
import { AssetsJsonService } from '@helper/services/assets-json.service';
import { ScreenService } from '@helper/services/screen.service';
import { UniqueService } from '@helper/services/unique.service';
import { StorageService } from '@helper/services/storage.service';
import { ObjectService } from '@helper/services/object.service';
import { StringService } from '@helper/services/string.service';
import { DateService } from '@helper/services/date.service';
import { BrowserService } from '@helper/services/browser.service';

/**
 * ИСПОЛЬЗОВАНИЕ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ - hhh
 *
 * для HelperService
 *
 * БЕЗ ИСПОЛЬЗОВАНИЯ:
 * - ИМПОРТА (в компоненте)
 * - ДЕКЛАРАЦИЙ (в компоненте)
 * - this (в компоненте)
 * - и чтобы TypeScript не выбрасывал ошибки при использовании hhh
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
