import { Injectable } from '@angular/core';

/* Функции для работы с датами */
@Injectable({ providedIn: 'root' })
export class DateService {

    public MONTH: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    public DAYS_OF_THE_WEEK: string[] =  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    /**
     * Создать текущую дату
     */
    public createDateCurrent(): Date {
        return new Date();
    }

    /**
     * Создать дату по строке
     * 7 numbers specify - year, month, day, hour, minute, second, and millisecond (in that order)
     * @param year
     * @param month
     * @param date
     * @param hour
     * @param minute
     * @param second
     * @param millisecond
     */
    public createDateByNumbers(year: number, month: number, date: number, hour = 8, minute = 0, second = 0, millisecond = 0) {
        return new Date(year, month, date, hour, minute, second, millisecond);
    }

    /**
     * Создать дату по строке
     * @param str - string - '3/27/2008' - формат месяц/день/год!!!
     */
    public createDateByString(str): Date {
        return new Date(str);
    }

    /**
     * Создать дату по Timestamp
     * @param timestamp - number
     */
    public createDateByTimestamp(timestamp): Date {
        return new Date(timestamp);
    }

    /**
     * Установка года
     * @param date - date
     * @param num - номер года
     */
    public setFullYear(date: Date, num: number): Date {
        date.setFullYear(num);

        return date;
    }

    /**
     * Установка месяца (0 - январь)
     * @param date - date
     * @param num - номер месяца
     */
    public setMonth(date: Date, num: number): Date {
        date.setMonth(num);

        return date;
    }

    /**
     * Установка дня в дате
     * @param date - date
     * @param num - номер даты
     */
    public setDate(date: Date, num: number): Date {
        date.setDate(num);

        return date;
    }

    /**
     * Установка часа - 0 and 23
     * @param date - date
     * @param num - номер часа
     */
    public setHours(date: Date, num: number): Date {
        date.setHours(num);

        return date;
    }

    /**
     * Установка минут - 0 and 59
     * @param date - date
     * @param num - номер минуты
     */
    public setMinutes(date: Date, num: number): Date {
        date.setMinutes(num);

        return date;
    }

    /**
     * Добавить годы
     * @param date - date
     * @param addYears - добавленные месяцы
     */
    public addYears(date: Date, addYears: number): Date {
        date.setFullYear(date.getFullYear() + addYears);

        return date;
    }

    /**
     * Добавить месяцы
     * @param date - date
     * @param addMonth - добавленные месяцы
     */
    public addMonth(date: Date, addMonth: number): Date {
        date.setMonth(date.getMonth() + addMonth);

        return date;
    }

    /**
     * Добавить дни
     * @param date - date
     * @param addDays - добавленные дни
     */
    public addDays(date: Date, addDays: number): Date {
        date.setDate(date.getDate() + addDays);

        return date;
    }

    /**
     * Получить разницу в днях
     * @param date1 - не получилось типизировать как Date - но приходит именно Date
     * @param date2 - не получилось типизировать как Date - но приходит именно Date
     */
    public getDifferenceDays(date1, date2): number {
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    /**
     * Получить номер недели по дню
     * @param date - date
     */
    public getDateWeekNumber(date: Date = null) {
        date = date ? date : new Date(new Date().valueOf());
        const tdt = new Date(date.valueOf());
        const dayn = (date.getDay() + 6) % 7;

        tdt.setDate(tdt.getDate() - dayn + 3);
        const firstThursday = tdt.valueOf();

        tdt.setMonth(0, 1);
        if (tdt.getDay() !== 4) {
            tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }

        // @ts-ignore
        return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    }

    /**
     * Возвращает год
     * @param date - объект даты (new Date())
     */
    public getFullYear(date: Date): number {
        return date.getFullYear();
    }

    /**
     * Возвращает номер месяц (0 - январь)
     * @param date - объект даты (new Date())
     */
    public getMonth(date: Date): number {
        return date.getMonth();
    }

    /**
     * Возвращает день месяца
     * @param date - объект даты (new Date())
     */
    public getDate(date: Date): number {
        return date.getDate();
    }

    /**
     * Возвращает час (от 0 до 23)
     * @param date - объект даты (new Date())
     */
    public getHours(date: Date): number {
        return date.getHours();
    }

    /**
     * Возвращает минуты (от 0 до 59)
     * @param date - объект даты (new Date())
     */
    public getMinutes(date: Date): number {
        return date.getMinutes();
    }

    /**
     * Возвращает секунды (от 0 до 59)
     * @param date - объект даты (new Date())
     */
    public getSeconds(date: Date): number {
        return date.getSeconds();
    }

    /**
     * Возвращает миллисекунды (от 0 до 999)
     * @param date - объект даты (new Date())
     */
    public getMilliseconds(date: Date): number {
        return date.getMilliseconds();
    }

    /**
     * Возвращает день недели (0 - воскресенье, и 6 - суббота)
     * @param date - объект даты (new Date())
     */
    public getDayOfWeek(date: Date): number {
        return date.getDate();
    }

    /**
     * Возвращает Timestamp по дате
     * @param date - объект даты (new Date())
     */
    public getTimestampData(date: Date): number {
        return new Date().valueOf();
    }

    /**
     * Возвращает текущий Timestamp
     */
    public getTimestampCurrent(): number {
        return new Date().valueOf();
    }

    /**
     * Возвращает полную дату в виде строки - 'Fri Feb 24 2023'
     * @param date - объект даты (new Date())
     */
    public toDateString(date: Date): string {
        return date.toDateString();
    }

    /**
     * Возвращает полное время в виде строки'00:05:11 GMT+0300 (Москва, стандартное время)'
     * @param date - объект даты (new Date())
     */
    public toTimeString(date: Date): string {
        return date.toTimeString();
    }

}
