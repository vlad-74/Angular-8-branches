import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

    public localStorage = window.localStorage;
    public sessionStorage = window.sessionStorage;

    public cache = {};
    public cacheFn(key: string, value = 'undefined', name: string = key) {
        name = key === name ? name : name + '-' + key;
        this.cache[name] = value;
    }

    /**
     * Пример Выполнение функции
     *        console.time('cached querySelector1');
     *         for (var i = 0; i < 1000000; i++) {  document.querySelector('p'); }
     *         console.timeEnd('cached querySelector1'); // 322.379150390625 ms
     *
     *         console.time('cached querySelector2');
     *         for (let i = 0; i < 1000000; i++) {
     *             if (!hhh.storage.querySelectorCache('p', 'dom')) {
     *                 break;
     *             }
     *         }
     *         console.timeEnd('cached querySelector2'); // 0.2041015625 ms
     */
    public querySelectorCache(selector, from = 'default') {
        let value = null;

        if (!this.cache[from + '-' + 'querySelector' + '-' + selector]) {
            value = document.querySelector(selector);
            this.cacheFn(selector, value, from + '-' + 'querySelector');
        }
        if (value) {
            return from + '-' + 'querySelector' + '-' + selector;
            // return this.cache[from + '-' + 'querySelector' + '-' + selector];
        } else {
            return null;
        }
    }

    public setLocalItem(name, value) {
        this._setInStorage(this.localStorage, name, value);
    }

    public setSessionItem(name, value) {
        this._setInStorage(this.sessionStorage, name, value);
    }

    public getLocalItem(name): any {
        return this._getFromStorage(this.localStorage, name);
    }

    public getSessionItem(name): any {
        return this._getFromStorage(this.sessionStorage, name);
    }

    public removeLocalItem(name) {
        this.localStorage.removeItem(name);
    }

    public removeSessionItem(name) {
        this.sessionStorage.removeItem(name);
    }

    public clearLocal() {
        this.localStorage.clear();
    }

    public clearSession() {
        this.sessionStorage.clear();
    }

    private _setInStorage(storage, name, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        storage.setItem(name, value);
    }

    private _getFromStorage(storage, name) {
        let value = storage.getItem(name);

        if (this._checkJson(value)) {
            value = JSON.parse(value);
        }

        return value;
    }

    private _checkJson(value) {
        try {
            JSON.parse(value);
        } catch (e) {
            return false;
        }

        return true;
    }
}
