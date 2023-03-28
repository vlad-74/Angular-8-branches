import { Injectable } from '@angular/core';
import { TRoles } from '@interfaces/helper.interfaces';
import { StateService } from '@checkpoints/01_state-emitters/state.service';

@Injectable({ providedIn: 'root' })
export class HistoryReglamentsService {
    private _appSnapshot = null;

    public constructor(
        private _state: StateService,
    ) {
    }

    public checkForChanges(appSnapshot) {
        this._appSnapshot = appSnapshot;
        const checkPoint = appSnapshot.appHistory;

        if (checkPoint.length === 1 && checkPoint[0] === '/') {
            this._startApplication();
        }
    }

    private _startApplication() {
        // kvg: при выходе очистить все в storage связанное с визитером
        hhh.storage.setLocalItem('#startScreen', hhh.screen.checkScreen());
        const visitorHasLogin = hhh.storage.getLocalItem('visitorHasLogin');

        console.log('---visitorHasLogin', visitorHasLogin);
        if (!visitorHasLogin) {
            this._checkRolesVisitors();
        } else {
            hhh.storage.clearLocal();
            hhh.storage.clearSession();
        }
    }

    private async _checkRolesVisitors() {
        // kvg: "получить текущего юзера" - userId
        const userId = '1';
        const participants = [];

        const cupsFounders = [];
        const cupsReferee = [];
        const cupsParticipants = [];

        const names = ['#cups', '#users', '#participant-users', '#cup-participants-referees' ];
        const roles: TRoles[] = ['visitor'];
        const result = await Promise.all([
            hhh.jsonService.getAssetsJsonData('db/cups.json'),
            hhh.jsonService.getAssetsJsonData('db/users.json'),
            hhh.jsonService.getAssetsJsonData('db/participant-users.json'),
            hhh.jsonService.getAssetsJsonData('db/cup-participants-referees.json'),
        ]);

        result.forEach((item, i) => {
            if (i === 0 ) {
                if (this._getFounder(item, userId, cupsFounders)) { roles.push('founder'); }
            }

            if (i === 1 ) {
                if (this._getViewer(item, userId)) { roles.push('viewer'); }
            }

            if (i === 2 ) {
                if (this._getParticipant(item, userId, participants)) { roles.push('participant'); }
            }

            if (i === 3 ) {
                if (this._getReferee(item, userId, cupsReferee)) { roles.push('referee'); }
                this._getCupsParticipants(item, participants, cupsParticipants);
            }

            // kvg: только на период "без БЭКа"
            hhh.storage.setLocalItem(names[i], result[i]);
        });

        this._state.newAppState({
            ...this._appSnapshot.appState,
            roles: hhh.array.getArrayUnique(roles),
            participants: hhh.array.getArrayUnique(participants),
            cupsFounders: hhh.array.getArrayUnique(cupsFounders),
            cupsReferee: hhh.array.getArrayUnique(cupsReferee),
            cupsParticipants: hhh.array.getArrayUnique(cupsParticipants),
        });
    }

    private _getFounder(item, userId, cupsFounders): boolean {
        let result = false;

        item['cups'].forEach(it => {
            if (it.founderUser === userId) {
                result = true;
                cupsFounders.push(it.id);

            }
        });

        return result;
    }

    private _getReferee(item, userId, cupsReferee): boolean {
        let result = false;

        item['cupParticipantsReferees'].forEach(it => {
            if (it.referees.includes(userId)) {
                result = true;
                cupsReferee.push(it.idCup);
            }
        });

        return result;
    }

    private _getParticipant(item, userId, participants): boolean {
        let result = false;

        item['participantUsers'].forEach(it => {
            if (it.idUsers.includes(userId)) {
                result = true;
                participants.push(it.idParticipant);
            }
        });

        return result;
    }

    private _getCupsParticipants(item, participants, cupsParticipants) {
        item['cupParticipantsReferees'].forEach(cup => {
            const arr = hhh.array.intersectionUniqueInArrays(cup.idParticipants, participants);

            if (arr.length > 0) {
                arr.forEach(cupItem => {
                    cupsParticipants.push(cup.idCup);
                });
            }
        });
    }

    private _getViewer(item, userId): boolean {
        let result = false;

        item['users'].forEach(it => {
            if (it.id === userId) {
                result = true;
            }
        });

        return result;
    }
}
