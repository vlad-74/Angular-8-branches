/* Интерфейсы для модуля Helper */

export interface IScreen {
    vw: string;
    vh: string;
    dpi: number;
    coefficient: number;
    typeScreen: string;
    browser: IBrowser;
}

export interface IBrowser {
    browser: string;
    version: string;
    OS: string;
}

export type TSelector = 'querySelector' | 'querySelectorAll';

export type TGetElement = Element | NodeList;
