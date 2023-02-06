import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SleepReglamentsService {

    public constructor(
        private router: Router,
    ) {
    }

    public checkForChanges(appSnapshot) {
        console.log(this.constructor.name + ' - appSnapshot - ', appSnapshot);
        this.router.navigate(['sleep']).then();
    }
}
