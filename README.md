# Competitions
[Справочные материалы по Markdown](https://learn.microsoft.com/ru-ru/contribute/markdown-reference)

[Класс для ВАЛИДАЦИИ](https://github.com/typestack/class-validator#installation)

[Internaltionalization I18n stackblitz](https://stackblitz.com/edit/angular-internaltionalization-i18n-cpzeaf?file=src%2Fapp%2Fhello.component.ts,src%2Fapp%2Fapp.component.ts)

[Internaltionalization I18n статья](https://progtask.ru/angular-i18n-ngx-translate/)

### ngrok http 4200 -host-header="localhost:4200"
[ngrok - для удаленного тестирования](https://ngrok.com)

> ## ДЛЯ РАЗРАБОТЧИКА (только для режима - `!environment.production`)
* 1 - outline 
* 1.1 - outline для компонентов - OutlineDirective - string = '3px dashed
* 1.2 - outline для html элементов - OutlineComponent - interface IOutlineParam
* 2 - логирование LogComponent - interface ILogParam 

==============================================================================
* 3 - !!! НАСЛЕДУЕМСЯ В КОМПОНЕНТАХ ОТ CheckpointsComponent И ПОЛУЧАЕМ currentAppSnapshot
* при наследовании класс получает:
    * - КЛАСС CheckpointsComponent - подписка на состояние приложения
    * - под-КЛАСС LogComponent - логирование компонента - если в конструктор передан параметр logTyp: string
    * - под-под-КЛАСС OutlineComponent - outline (css) для компонента - если в конструктор передан параметр px: number
```
export class WrapperComponent extends CheckpointsComponent implements OnInit, OnDestroy {
    public isHiddenMenu = false;
    private _activeRouteHidden = ['developer', 'sleep', 'not-found'];

    public constructor(
        public checkpoints: CheckpointsService, // для передачи в super
    ) {
        super(
            checkpoints,
            { type: 'default', isGlobalLog: true },
            { px: 1, isGlobalOutline: true },
        );
        // если не нужно логирование - super(snapShot, { type: '', isGlobalLog: false }, { px: 1, isGlobalOutline: true });
        // если не нужно outline - super(snapShot, { type: 'default', isGlobalLog: true }, { px: 0, isGlobalOutline: false });
    }

    /**
     * при наследовании получают:
     * - КЛАСС CheckpointsComponent - подписка на состояние приложения
     * - КЛАСС LogComponent - логирование компонента - если в конструктор передан параметр logTyp:string
     * - КЛАСС OutlineComponent - outline (css) для компонента - если в конструктор передан параметр px:number
     * this.$checkpoints пришел из наследуемого класса CheckpointsComponent
     */
    public ngOnInit() {
        const index = this.$checkpoints.appRouterHistory.length - 1;

        if (index !== -1) {
            const currentRoute = this.$checkpoints.appRouterHistory[index].split('/')[1];

            this.isHiddenMenu = this._activeRouteHidden.includes(currentRoute);
        }
    }

    /* Отписываемся от подписок */
    public ngOnDestroy(): void {
        this.onDestroy();
    }
}
```
==============================================================================
* 4 - !!! CheckpointsComponent с подпиской на _appCheckpoints$
```
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LogComponent } from '@helper/extends/log.component';
import { ILogParam, IOutlineParam } from '@interfaces/helper.interface';
import { CheckpointsService, IWatcher } from '@checkpoints/checkpoints.service';

/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ
 *
 * при наследовании получают
 * @param currentAppSnapshot - состояние приложения
 */
export abstract class CheckpointsComponent extends LogComponent {
    public $checkpoints: IWatcher;
    private readonly destroyed$ = new Subject();

    protected constructor(
        public checkpoints: CheckpointsService,
        public logParam: ILogParam,
        public outlineParam: IOutlineParam,
    ) {
        super(logParam, outlineParam);

        this.checkpoints._appCheckpoints$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe((value: IWatcher) => {
                /**
                 * this.$checkpoints - будет доступна во всех наследуемых компонентах
                 */
                this.$checkpoints = value ;

            /**
             * логирование из наследуемого класса LogComponent
             * при this.logParam.type === 'default' передавать appSnapshot приложения
             */
                if (this.logParam.type && value) { this.log(this.$checkpoints); }
            });
    }

    /* Отписываемся от подписок */
    public onDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
```

> ## ГЛАВНОЕ
* 1 - `angular.json` - место добавления js скриптов - `"scripts": ["./src/assets/scripts/code.js"]` и стилей - `"styles": ["src/styles.scss"]`
* 2 - `src\polyfills.ts` !!! - реализация ИСПОЛЬЗОВАНИЯ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ - hhh (HelperService - ДЛЯ РАЗРАБОТЧИКА)
* 3 - `src\typings.d.ts` - место для объявления глобальных переменных (...как вариант / пока не актуально)
* 4 - `src\app\02_routing\lazy-loading-routes.ts` - роутинг приложения.
* 5 - `src\app\01_root\01_helper\style\index.scss` - общие стили приложения
* 6 - `src\app\01_root\01_helper\helper.service.ts` - СЕРВИСЫ ДЛЯ РАЗРАБОТЧИКА
* 7 - `src\app\01_root\01_helper\extends` - классы для наследования (...и для использования в других проектах)
* 8 - `src\app\01_root\01_helper\directives` - директивы (...и для использования в других проектах)
* 9 - `src\app\01_root\02_checkpoints` - !!!контрольные точки приложения (emmit & subscribe) - url, appActions$, appState$, isTheme$, isSleep$
* 10 - `src\app\01_root\03_reglaments\reglament.service.ts` - логика действий приложения по контрольным точкам приложения
* 11 - `src\app\10_developer` - "ПЕСОЧНИЦА" для разработчика - отработка и ИСТОРИЯ функционала. ВИЗУАЛИЗАЦИЯ КОДА !!!

> ## СТРУКТУРА ПРОЕКТА
* 0 - Папка - `src\app\00_app` - старт приложения
* 1 - Папка !!! - `src\app\01_root` содержит:
* 1.1. - подпапка !!! `01_helper` - ПАПКА `ДЛЯ РАЗРАБОТЧИКА` - состоящая из сервисов для работы `типами данных` и другими сущностями приложения. - `@Injectable({ providedIn: 'root' })`
* 1.2. - подпапка !!! `02_checkpoints` - ПАПКА `КОНТРОЛЬНЫХ ТОЧЕК ПРИЛОЖЕНИЯ`
* 1.3. - подпапка !!! `03_reglaments` - ПАПКА `ЛОГИКА ДЕЙСТВИЯ ПРИЛОЖЕНИЯ ПО КОНТРОЛЬНЫМ ТОЧКАМ`. Все сервисы подключены к root - `@Injectable({ providedIn: 'root' })`
* 2 - Папка !!! `src\app\02_routing` Папка `НАВИГАЦИИ`
* 3 - Папка `03_interfaces` - интерфейсы приложения.
* 4 - Папка `04_shared` - модуль с `общим функционалом` приложения.
* 5 - Папка `05_modules` - модули приложения
* 6 - Папка `06_directives` - директивы приложения
* 7 - Папка `07_pipes` - пайпы приложения
* 8 - Папка `08_styles` - стили приложения
* 9 - Папка !!! `10_developer` - "ПЕСОЧНИЦА" для разработчика - отработка и ИСТОРИЯ функционала. ВИЗУАЛИЗАЦИЯ КОДА !!!

> ### This project was generated with:
#### [NODE](https://nodejs.org/fr/blog/release/v12.18.1/) version 12.18.1
#### NPM - 6.14.5
#### [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

> ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[Справочные материалы по Markdown](https://learn.microsoft.com/ru-ru/contribute/markdown-reference)
