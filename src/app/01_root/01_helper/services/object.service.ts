import { Injectable } from '@angular/core';

/* Функции для работы с объектами */
@Injectable({ providedIn: 'root' })
export class ObjectService {

    /* Добавить объект в прототип || Наследование */
    public objectInPrototype(obj) {
        return Object.create(obj);
    }

    /* Клонирование объекта */
    public objectCloning(obj) {
        return Object.assign({}, obj);
    }

    /* Копирование объекта */
    public objectCopy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}
