import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

    public localStorage = window.localStorage;
    public sessionStorage = window.sessionStorage;

    public cache(key, value = null) {
        if (typeof value === 'undefined') { return this.cache[key]; }
        this.cache[key] = value;
    }

    /**
     * Пример Выполнение функции
     * console.time('regular querySelector');
     *  for (var i = 0; i < 1000000; i++) { document.querySelector('h1'); }
     * console.timeEnd('regular querySelector'); // regular querySelector: 100.6123046875ms
     *
     * console.time('cached querySelector');
     *  for (var i = 0; i < 1000000; i++) {  this.querySelector('h1'); }
     * console.timeEnd('cached querySelector'); // querySelector: 5.77392578125ms
     */
    public querySelector(selector) {
        if (!this.cache(selector)) {
            this.cache(selector, document.querySelector(selector));
        }

        return this.cache(selector);
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
