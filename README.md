# Competitions
[Справочные материалы по Markdown](https://learn.microsoft.com/ru-ru/contribute/markdown-reference)

[Internaltionalization I18n stackblitz](https://stackblitz.com/edit/angular-internaltionalization-i18n-cpzeaf?file=src%2Fapp%2Fhello.component.ts,src%2Fapp%2Fapp.component.ts)

[Internaltionalization I18n статья](https://progtask.ru/angular-i18n-ngx-translate/)

> ## НАВИГАЦИЯ
* 1 - lazy-loading-routes.ts в папке app - стартовый роутинг.
* 2 - Папка `routing` - логика направления на `module-screen` экранные (групповые) модули (первый слеш роутинга). ...через папку `modules`
* 3 - Папка (групповая) `modules`
* 3.1. - Подпапка `01_module-screen` - экранные модули могут состоять из нескольких `module-page` модуль-страниц (второй слеш роутинга).
* 3.2. - Подпапка `02_module-page` - модуль-страница состоит из нескольких компонентов. Модуль-страница может быть в нескольких `module-screen`.

> ## СТРУКТУРА ПРОЕКТА
* 1 - Папка !!!!! - `01_root` содержит: 
* 1.1. - подпапка !!!!! `01_state` - основной ПАПКА `СОСТОЯНИЯ` приложения. Все сервисы подключены к root - `@Injectable({ providedIn: 'root' })`
* 1.2. - подпапка !!!!! `02_helper` - ПАПКА `ДЛЯ РАЗРАБОТЧИКА` - состоящая из сервисов для работы `типами данных` и другими сущностями приложения. - `@Injectable({ providedIn: 'root' })`
* 1.3. - подпапка !!!!! `03_subscribe` - ПАПКА `ДЛЯ ОСНОВНЫХ ПОДПИСОК ПРИЛОЖЕНИЯ` (клиент ПАПКИ `01_state`) - `@Injectable({ providedIn: 'root' })`
* 2 - Папка `02_routing` с подпапками и Папка `03_modules` с подпапками - про эти папки указано в `НАВИГАЦИЯ`
* 3 - Папка !!! `04_shared` - модуль с `общим функционалом` приложения.
* 4 - Папка `05_interfaces` - интерфейсы приложения.
* 5 - Папка ! `06_developer-info` - информация для разработчка об `инструментах/библиотеках` участвующих в проекте. ВИЗУАЛИЗАЦИЯ КОДА !!!


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
