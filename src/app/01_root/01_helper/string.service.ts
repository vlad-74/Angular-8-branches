import { Injectable } from '@angular/core';

/* Функции для работы со строками */
@Injectable({ providedIn: 'root' })
export class StringService {

    /**
     * Создать строку путем многократного повторения
     * @param str - строка
     * @param num - количество повторений
     */
    public repeatStringGivenNumber(str, num) {
        return str.repeat(num);
    }

    /**
     * Добавить в начало строки
     * @param str - строка
     * @param num - длина возвращаемой строки
     * @param insert - втавляемое значение
     */
    public startAddString(str, num, insert) {
        return str.padStart(num, insert); // hello'.padStart(10, '!'); // "!!!! hello"
    }

    /**
     * Добавить в конец строки
     * @param str - строка
     * @param num - длина возвращаемой строки
     * @param insert - втавляемое значение
     */
    public endAddString(str, num, insert) {
        return str.padEnd(num, insert); // 'hello '.padEnd(10, '!'); // "hello !!!!"
    }

    /**
     *  Проверка начала строки
     *  @param str - строка
     *  @param check - проверяемый параметр
     */
    public startСhecking(str, check) {
        return str.startsWith(check);
    }

    /**
     *  Проверка окончания строки
     *  @param str - строка
     *  @param check - проверяемый параметр
     */
    public endChecking(str, check) {
        return str.endsWith(check);
    }

    /**
     *  Удалить с начала строки
     *  @param str - строка
     *  @param i - от
     */
    public startDel(str, i= 1) {
        return str.slice(i);
    }

    /**
     *  Удалить с окончания строки
     *  @param str - строка
     *  @param i - от
     */
    public endDel(str, i= 1) {
        return str.slice(0, -i);
    }

    /**
     *  Удалить промежуток
     *  @param str - строка
     *  @param start - от
     *  @end i - по
     */
    public midleDel(str, start= 0, end= 1000) {
        return str.substring(start, end);
    }

    /**
     * Строка в строке
     *  @param str - строка исходная
     *  @param findStr - 'поисковая' строка
     */
    public checkLineInLine(str: string, findStr: string) {
        return str.includes(findStr);
    }

    /* Сделать первую букву заглавной */
    public firstLetterCapitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    /* Сделать первую букву маленькой */
    public firstLetterToLower(str) {
        return str[0].toLowerCase() + str.slice(1);
    }
}
