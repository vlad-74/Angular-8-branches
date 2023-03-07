import { Injectable } from '@angular/core';
import { HelperService } from '@helper/helper.service';
import { ActionsReglamentsService } from '@reglaments/reglaments/actions-reglaments.service';
import { StateReglamentsService } from '@reglaments/reglaments/state-reglaments.service';
import { ThemeReglamentsService } from '@reglaments/reglaments/theme-reglaments.service';
import { SleepReglamentsService } from '@reglaments/reglaments/sleep-reglaments.service';
import { HistoryReglamentsService } from '@reglaments/reglaments/history-reglaments.service';

@Injectable({ providedIn: 'root' })
export class ReglamentsService {

    public constructor(
        private _h: HelperService,
        private _actionsReglaments: ActionsReglamentsService,
        private _sleepReglaments: SleepReglamentsService,
        private _stateReglaments: StateReglamentsService,
        private _themeReglaments: ThemeReglamentsService,
        private _historyReglaments: HistoryReglamentsService,
    ) {}

    public checkStateChanges(appSnapshot) {
        const change = appSnapshot.itemChange;

        if (change === 'appState') {
            this._stateReglaments.checkForChanges(appSnapshot);
        }

        if (change === 'appActions') {
            this._actionsReglaments.checkForChanges(appSnapshot);
        }

        if (change === 'isTheme') {
            this._themeReglaments.checkForChanges(appSnapshot);
        }

        if (change === 'isSleep') {
            this._sleepReglaments.checkForChanges(appSnapshot);
        }

        if (change === 'appHistory') {
            this._historyReglaments.checkForChanges(appSnapshot);
        }
    }
}
