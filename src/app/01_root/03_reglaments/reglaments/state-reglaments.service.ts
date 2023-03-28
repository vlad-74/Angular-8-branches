import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateReglamentsService {

    public checkForChanges(appSnapshot) {
        console.log('---appSnapshot', appSnapshot);
    }
}
