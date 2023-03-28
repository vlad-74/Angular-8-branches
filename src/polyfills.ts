/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/***************************************************************************************************
 * ИСПОЛЬЗОВАНИЕ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ - hhh
 *
 * для HelperService
 *
 * БЕЗ ИСПОЛЬЗОВАНИЯ:
 * - ИМПОРТА (в компоненте)
 * - ДЕКЛАРАЦИЙ (в компоненте)
 * - this (в компоненте)
 * - и чтобы TypeScript не выбрасывал ошибки при использовании hhh
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
 * например в src\app\08_developer\test\test.component.ts
 */
import { HelperService } from '@helper/helper.service';  // Included with Angular CLI.

declare global {
    interface Window {
        hhh: HelperService;
    }
}

declare global {
    /**
     * Если нужна ЕЩЕ "глобальная переменная" типа hhh
     *
     * реализацию смотри в polyfills.ts
     * @example
     * ДЛЯ ПРОСМОТРА ДОСТУПНЫХ СВОЙСТВ И МЕТОДОВ у переменной
     * после добавления точки нажать - Ctrl + Shift + пробел
     */
    const hhh: HelperService;
}
/***************************************************************************************************/
