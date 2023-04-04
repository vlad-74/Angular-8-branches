import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReglamentThemeService {

    public checkForChanges(appSnapshot) {
        this.setThemsValue(appSnapshot.isTheme);
    }

    // значения для темы
    public setThemsValue(isTheme) {
        const bg = isTheme ? '#444756' : '#F9F9F9';
        const color = isTheme ? '#FFFFFF' : '#333333';
        const bgMenu = isTheme ? '#F9F9F9' : '#444756';

        this.changeTheme ({ bg, color, bgMenu }); // для смены темы
    }

    // задать полученные значения для параметров (body и text) темы
    public changeTheme(prop) {
        const values = [
            ['--bg', prop.bg],
            ['--color', prop.color],
            ['--bgMenu', prop.bgMenu],
        ];
        const stl = document.documentElement.style;

        for (const value of values) {
            stl.setProperty(value[0], value[1]);
        }
    }
}
