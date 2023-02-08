import { Injectable } from '@angular/core';
import { HelperService } from '@helper/helper.service';
import { ActionsReglamentsService } from '@reglaments/reglaments/actions-reglaments.service';
import { StateReglamentsService } from '@reglaments/reglaments/state-reglaments.service';
import { ThemeReglamentsService } from '@reglaments/reglaments/theme-reglaments.service';
import { SleepReglamentsService } from '@reglaments/reglaments/sleep-reglaments.service';

@Injectable({ providedIn: 'root' })
export class ReglamentsService {

    public constructor(
        private _h: HelperService,
        private _actionsReglaments: ActionsReglamentsService,
        private _sleepReglaments: SleepReglamentsService,
        private _stateReglaments: StateReglamentsService,
        private _themeReglaments: ThemeReglamentsService,
    ) {}

    public checkStateChanges(appSnapshot) {
        this._h.common.log([' - ReglamentsService - ', appSnapshot]);

        const change = appSnapshot.itemChange;

        if (change === 'appActions') {
            this._actionsReglaments.checkForChanges(appSnapshot);
        }
        if (change === 'isSleep') {
            this._sleepReglaments.checkForChanges(appSnapshot);
        }
        if (change === 'appState') {
            this._stateReglaments.checkForChanges(appSnapshot);
        }
        if (change === 'isTheme') {
            this._themeReglaments.checkForChanges(appSnapshot);
        }
    }
}
