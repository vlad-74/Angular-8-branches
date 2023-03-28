import { Injectable } from '@angular/core';

/* Функции для работы со строками */
@Injectable({ providedIn: 'root' })
export class StringService {

    /**
     * Создать строку путем многократного повторения
     * @param str - строка
     * @param num - количество повторений
     */
    public repeatStringGivenNumber(str, num): string {
        return str.repeat(num);
    }

    /**
     * Добавить в начало строки
     * @param str - строка
     * @param num - длина возвращаемой строки
     * @param insert - втавляемое значение
     */
    public startAddString(str, num, insert): string {
        return str.padStart(num, insert); // hello'.padStart(10, '!'); // "!!!! hello"
    }

    /**
     * Добавить в конец строки
     * @param str - строка
     * @param num - длина возвращаемой строки
     * @param insert - втавляемое значение
     */
    public endAddString(str, num, insert): string {
        return str.padEnd(num, insert); // 'hello '.padEnd(10, '!'); // "hello !!!!"
    }

    /**
     *  Проверка начала строки
     *  @param str - строка
     *  @param check - проверяемый параметр
     */
    public startСhecking(str, check): string {
        return str.startsWith(check);
    }

    /**
     *  Проверка окончания строки
     *  @param str - строка
     *  @param check - проверяемый параметр
     */
    public endChecking(str, check): string {
        return str.endsWith(check);
    }

    /**
     *  Удалить с начала строки
     *  @param str - строка
     *  @param i - от
     */
    public startDel(str, i= 1): string {
        return str.slice(i);
    }

    /**
     *  Удалить с окончания строки
     *  @param str - строка
     *  @param i - от
     */
    public endDel(str, i= 1): string {
        return str.slice(0, -i);
    }

    /**
     *  Удалить промежуток
     *  @param str - строка
     *  @param start - от
     *  @end i - по
     */
    public midleDel(str, start= 0, end= 1000): string {
        return str.substring(start, end);
    }

    /**
     * Строка в строке
     *  @param str - строка исходная
     *  @param findStr - 'поисковая' строка
     */
    public isLineInLine(str: string, findStr: string): boolean {
        return str.includes(findStr);
    }

    /**
     *  Получить букву по номеру
     *  @param str - строка
     *  @param num - номер буквы в строке
     */
    public getStr(str: string, num: number): string {
        return str.charAt(num); // "Привет Том".charAt(2) // и
    }

    /**
     * Получить код по номеру
     *  @param str - строка
     *  @param num - номер буквы в строке
     */
    public getCode(str: string, num: number): number {
        return str.charCodeAt(num); // "Привет Том".charCodeAt(2) // 1080
    }

    /**
     *  Получить str по коду
     *  @param arrNumber - массив кодов букв/знаков
     */
    public getStrByCode(arrNumber: number[]): string {
        return String.fromCharCode(...arrNumber);
    }

    /* Сделать первую букву заглавной */
    public firstLetterCapitalize(str): string {
        return str[0].toUpperCase() + str.slice(1);
    }

    /* Сделать первую букву маленькой */
    public firstLetterToLower(str): string {
        return str[0].toLowerCase() + str.slice(1);
    }
}
