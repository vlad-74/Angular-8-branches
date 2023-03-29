import { IAction, IScreen, IState } from '@interfaces/helper.interface';

export interface ISnapshot {
    appHistory: string[];
    appActions: IAction;
    appScreen: IScreen;
    appState: IState;
    isTheme: boolean;
    isSleep: boolean;
    itemChange: string;
}
