# Competitions
[Справочные материалы по Markdown](https://learn.microsoft.com/ru-ru/contribute/markdown-reference)

[Internaltionalization I18n stackblitz](https://stackblitz.com/edit/angular-internaltionalization-i18n-cpzeaf?file=src%2Fapp%2Fhello.component.ts,src%2Fapp%2Fapp.component.ts)

[Internaltionalization I18n статья](https://progtask.ru/angular-i18n-ngx-translate/)

### ngrok http 4200 -host-header="localhost:4200"
[ngrok - для удаленного тестирования](https://ngrok.com)

> ## ГЛАВНОЕ
* 1 - `src\polyfills.ts` - реализация ИСПОЛЬЗОВАНИЯ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ - hhh (HelperService - ДЛЯ РАЗРАБОТЧИКА)
* 2 - `src\typings.d.ts` - место для объявления глобальных переменных (...как вариант / пока не актуально)
* 3 - `src\app\02_routing\lazy-loading-routes.ts` - роутинг приложения.
* 4 - `src\app\01_root\01_helper\style\index.scss` - общие стили приложения
* 5 - `src\app\01_root\01_helper\helper.service.ts` - СЕРВИСЫ ДЛЯ РАЗРАБОТЧИКА
* 6 - `src\app\01_root\02_checkpoints` - контрольные точки приложения (emmit & subscribe)
* 7 - `src\app\01_root\03_reglaments\reglaments.service.ts` - логика действий приложения по контрольным точкам приложения

> ## СТРУКТУРА ПРОЕКТА
* 0 - Папка - `src\app\00_app` - старт приложения
* 1 - Папка !!! - `src\app\01_root` содержит:
* 1.1. - подпапка !!! `01_helper` - ПАПКА `ДЛЯ РАЗРАБОТЧИКА` - состоящая из сервисов для работы `типами данных` и другими сущностями приложения. - `@Injectable({ providedIn: 'root' })`
* 1.2. - подпапка !!! `02_checkpoints` - ПАПКА `КОНТРОЛЬНЫХ ТОЧЕК ПРИЛОЖЕНИЯ` содержит:
* 1.2.1. - под-подпапка !!! `01_state-emitters` - основной ПАПКА `СОСТОЯНИЯ` приложения. Все сервисы подключены к root - `@Injectable({ providedIn: 'root' })`
* 1.2.2. - под-подпапка !!! `02_stste-subscribe` - ПАПКА `ДЛЯ ОСНОВНЫХ ПОДПИСОК ПРИЛОЖЕНИЯ` (клиент ПАПКИ `01_state-emitters`) - `@Injectable({ providedIn: 'root' })`
* 1.3. - подпапка !!! `03_reglaments` - ПАПКА `ЛОГИКА ДЕЙСТВИЯ ПРИЛОЖЕНИЯ ПО КОНТРОЛЬНЫМ ТОЧКАМ`. Все сервисы подключены к root - `@Injectable({ providedIn: 'root' })`
* 2 - Папка !!! `src\app\02_routing` Папка `НАВИГАЦИИ`
* 3 - Папка `03_interfaces` - интерфейсы приложения.
* 4 - Папка `04_shared` - модуль с `общим функционалом` приложения.
* 5 - Папка `05_modules` - модули приложения
* 6 - Папка !!! `06_developer` - информация для разработчка об `инструментах/библиотеках` участвующих в проекте. ВИЗУАЛИЗАЦИЯ КОДА !!!

> ### This project was generated with:
#### [NODE](https://nodejs.org/fr/blog/release/v12.18.1/) version 12.18.1
#### NPM - 6.14.5
#### [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

>
## Development server

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
