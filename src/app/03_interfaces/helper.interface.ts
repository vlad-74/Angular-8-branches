/* Интерфейсы для модуля Helper */

export interface IScreen {
    vw: string;
    vh: string;
    dpi: number;
    coefficient: number;
    typeScreen: string;
    browser: IBrowser;
    orientation: ScreenOrientation;
}

export interface IBrowser {
    browser: string;
    version: string;
    OS: string;
}

export interface IState {
    visitorHasLogin: boolean;
    roles: TRoles[];
    participants: string[];
    cupsReferee: string[];
    cupsParticipants: string[];
    cupsFounders: string[];
}

export type TRoles = 'visitor' | 'viewer' | 'participant' | 'referee' | 'founder' | 'developer' | 'admin';

export interface IAction {
    from: string;
    to: string;
    name: string;
    data: any;
}

export interface ILogParam {
    type: string;
    isGlobalLog: boolean;
}

export interface IOutlineParam {
    px: number;
    isGlobalOutline: boolean;
}

export type TSelector = 'querySelector' | 'querySelectorAll';

export type TGetElement = Element | NodeList;

export type TTypeAppend = 'insertBefore' | 'appendChild';

export type TMouseEvents = 'click' | ' dblclick' | ' mousedown' | ' mouseup' | ' contextmenu' | ' mouseout' | ' mousewheel' | ' mouseover';
export type TTouchEvents = 'touchstart' | ' touchend' | ' touchmove' | ' touchcancel';
export type TKeyboardEvents = 'keydown' | ' keyup' | ' keypress';
export type TFormEvents = 'focus' | ' blur' | ' change' | ' submit';
export type TWindowEvents = 'resize' | ' scroll' | ' load' | ' unload' | ' hashchange';
export type TAllEvents = TMouseEvents | TTouchEvents | TKeyboardEvents | TFormEvents | TWindowEvents;
