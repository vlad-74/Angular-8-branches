import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ReglamentSleepService {

    public constructor(
        private router: Router,
    ) {
    }

    public checkForChanges(appSnapshot) {
        this.router.navigate(['sleep']).then();
    }
}
