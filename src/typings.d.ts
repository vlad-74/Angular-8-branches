/* SystemJS module definition */
// interface NodeModule {
//     id: string;
// }
// declare var module: NodeModule;

/**
 * ИСПОЛЬЗОВАНИЕ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ
 * БЕЗ ИСПОЛЬЗОВАНИЯ:
 * - ИМПОРТА (в компоненте)
 * - ДЕКЛАРАЦИЙ (в компоненте)
 * - this (в компоненте)
 *
 * 1 шаг - декларация
 * @example => declare const hhh: any;
 * в src\typings.d.ts
 *
 * 2 шаг - декларация глобальной переменной
 * @example => declare global {
 *     interface Window {
 *         hhh: HelperService;
 *     }
 * }
 * в src\polyfills.ts
 *
 * 3 шаг - присвоение глобальной переменной сервиса
 * @example => window.hhh = this;
 * в src\app\01_root\01_helper\helper.service.ts
 *
 * 4 шаг - использование глобальной переменной
 * @example => hhh.unique.generateUniqueString()
 * например в src\app\06_developer\test\test.component.ts
 */
// declare const hhh: any; // для глобальных переменных (window['hhh'] = this) - чтобы не было ошибок у TS
