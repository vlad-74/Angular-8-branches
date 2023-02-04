/* Интерфейсы для модуля Helper */

export interface IScreen {
    vw: string;
    vh: string;
    dpi: number;
}

export type TSelector = 'querySelector' | 'querySelectorAll';

export type TGetElement = Element | NodeList;
