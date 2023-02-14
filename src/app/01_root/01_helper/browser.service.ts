/* Функции для работы с браузером */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrowserService {

    public versionSearchString;
    public dataBrowser = [
        {
            string: navigator.userAgent,
            subString: 'Chrome',
            identity: 'Chrome',
        },
        { string: navigator.userAgent,
            subString: 'OmniWeb',
            versionSearch: 'OmniWeb/',
            identity: 'OmniWeb',
        },
        {
            string: navigator.vendor,
            subString: 'Apple',
            identity: 'Safari',
            versionSearch: 'Version',
        },
        {
            prop: window['opera'],
            identity: 'Opera',
            versionSearch: 'Version',
        },
        {
            string: navigator.vendor,
            subString: 'iCab',
            identity: 'iCab',
        },
        {
            string: navigator.vendor,
            subString: 'KDE',
            identity: 'Konqueror',
        },
        {
            string: navigator.userAgent,
            subString: 'Firefox',
            identity: 'Firefox',
        },
        {
            string: navigator.vendor,
            subString: 'Camino',
            identity: 'Camino',
        },
        {
            /* For Newer Netscapes (6+) */
            string: navigator.userAgent,
            subString: 'Netscape',
            identity: 'Netscape',
        },
        {
            string: navigator.userAgent,
            subString: 'MSIE',
            identity: 'Internet Explorer',
            versionSearch: 'MSIE',
        },
        {
            string: navigator.userAgent,
            subString: 'Gecko',
            identity: 'Mozilla',
            versionSearch: 'rv',
        },
        {
            /* For Older Netscapes (4-) */
            string: navigator.userAgent,
            subString: 'Mozilla',
            identity: 'Netscape',
            versionSearch: 'Mozilla',
        },
    ];
    public dataOS = [
        {
            string: navigator.platform,
            subString: 'Win',
            identity: 'Windows',
        },
        {
            string: navigator.platform,
            subString: 'Mac',
            identity: 'Mac',
        },
        {
            string: navigator.userAgent,
            subString: 'iPhone',
            identity: 'iPhone/iPod',
        },
        {
            string: navigator.platform,
            subString: 'Linux',
            identity: 'Linux',
        },
    ];

    /* Получаем данные о браузере */
    public getBrowser() {
        const browser = this.searchString(this.dataBrowser) || 'Неизвестный браузер';
        const version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'неизвестная версия';
        const OS = this.searchString(this.dataOS) || 'an unknown OS';

        return { browser, version, OS };
    }

    public searchString(data) {
        if (data) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < data.length; i++) {
                const dataString = data[i].string;
                const dataProp = data[i].prop;

                this.versionSearchString = data[i].versionSearch || data[i].identity;

                if (dataString) {
                    if (dataString.indexOf(data[i].subString) !== -1) {
                        return data[i].identity;
                    }
                } else if (dataProp) {
                    return data[i].identity;
                }
            }
        }
    }

    public searchVersion(dataString) {
        const index = dataString.indexOf(this.versionSearchString);

        if (index === -1) { return; }

        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
}
