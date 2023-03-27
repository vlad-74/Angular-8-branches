/* SystemJS module definition */
// interface NodeModule {
//     id: string;
// }
// declare var module: NodeModule;

/**
 * в случае добавления новых сервисов в HelperService
 * в интерфейс Ihh тоже нужно добавить новый параметр
 */
interface Ihh {
    array: any;
    common: any;
    dom: any;
    jsonService: any;
    screen: any;
    unique: any;
    storage: any;
    object: any;
    string: any;
    date: any;
    browser: any;
}

/**
 * в импортах компонента можно повторно продекларировать - для удобства
 * @example => declare const hh: HelperService;
 * тогда будет более глубокая детализация
 */
declare const hh: Ihh; // для глобальных переменных (window['hh'] = this) - чтобы не было ошибок у TS
