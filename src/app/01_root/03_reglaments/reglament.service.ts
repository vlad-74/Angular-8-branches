import { Injectable } from '@angular/core';
import { ReglamentActionsService } from '@reglaments/reglaments/reglament-actions.service';
import { ReglamentSleepService } from '@reglaments/reglaments/reglament-sleep.service';
import { ReglamentStateService } from '@reglaments/reglaments/reglament-state.service';
import { ReglamentThemeService } from '@reglaments/reglaments/reglament-theme.service';
import { ReglamentHistoryService } from '@reglaments/reglaments/reglament-history.service';

@Injectable({ providedIn: 'root' })
export class ReglamentService {

    public constructor(

        private _actionsReglament: ReglamentActionsService,
        private _sleepReglament: ReglamentSleepService,
        private _stateReglament: ReglamentStateService,
        private _themeReglament: ReglamentThemeService,
        private _historyReglament: ReglamentHistoryService,
    ) {}

    public getСheckpoints(checkpoints) {
        this._setReglament(checkpoints);
    }

    private _setReglament(checkpoints) {
        const change = checkpoints.itemChange;

        if (change === 'appState') {
            // this._stateReglament.checkForChanges(checkpoints);
        }

        if (change === 'appActions') {
            // this._actionsReglament.checkForChanges(checkpoints);
        }

        if (change === 'isTheme') {
            // this._themeReglament.checkForChanges(checkpoints);
        }

        if (change === 'isSleep') {
            // this._sleepReglament.checkForChanges(checkpoints);
        }

        if (change === 'appRouterHistory') {
            // this._historyReglament.checkForChanges(checkpoints);
        }
    }

}
