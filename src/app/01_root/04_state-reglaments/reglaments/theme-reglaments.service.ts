import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeReglamentsService {

    public checkForChanges(appSnapshot) {
        console.log(this.constructor.name + ' - appSnapshot - ', appSnapshot);
        this.setThemsValue(appSnapshot.isTheme);
    }

    // значения для темы
    public setThemsValue(isTheme) {
        const body = isTheme ? '#444756' : '#F9F9F9';
        const text = isTheme ? '#FFFFFF' : '#333333';

        this.changeTheme ({ body, text }); // для смены темы
    }

    // задать полученные значения для параметров (body и text) темы
    public changeTheme(prop) {
        const values = [ ['--bg', prop.body], ['--color', prop.text] ];
        const stl = document.documentElement.style;

        for (const value of values) {
            stl.setProperty(value[0], value[1]);
        }
    }
}
