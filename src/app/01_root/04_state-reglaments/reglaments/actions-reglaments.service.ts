import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActionsReglamentsService {

    public checkForChanges(appSnapshot) {
        console.log('---appSnapshot', appSnapshot);
    }
}
