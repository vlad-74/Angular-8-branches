import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReglamentActionsService {

    public checkForChanges(appSnapshot) {
        console.log('---appSnapshot', appSnapshot);
    }
}
