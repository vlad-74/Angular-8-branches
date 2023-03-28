/* Функции для работы с массивами */

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArrayService {
    private _maxGetMax: number;
    private _maxGetMin: number;

    public constructor() {
        Array.prototype['max'] = function() { return Math.max.apply(null, this); };
        Array.prototype['min'] = function() { return Math.min.apply(null, this); };
    }

    /**
     * Создать массив определенной длины = num
     * @param num
     */
    public getArrayGivenLength(num) {
        return Array.from({ length: num }, (v, k) => k); // [0, 1, 2, 3, 4]
    }

    /**
     * Заполнение массива
     * @param num - размер массива
     * @param example - чем заполнять
     */
    public fillArray(num, example) {
        return new Array(num).fill(example); // ['z', 'z', 'z', 'z', 'z']
    }

    /**
     * Получить массив с и по
     * @param a - стартовая позиция массива
     * @param b - последня позиция массива
     */
    public getArrayFromTo(a: number, b: number) {
        const arr = [];

        while (a <= b) { arr.push(a); a++; }

        return arr; // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    }

    /**
     * Получить уникальный массив
     * @param arr - исходный массив
     */
    public getArrayUnique(arr) {
        return  [...new Set(arr)];
    }

    /**
     * Получить случайный элемент из списка
     * @examples
     * const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     * this.01_helper.array.randomItemFromArray(months)
     */
    public randomItemFromArray(array: any[]): any {
        return array[Math.floor(Math.random() * (array.length))];
    }

    /**
     * Объединение уникальных значений массива
     * @examples
     * const arrayA = [1, 2, 3, 4];
     * const arrayB = [3, 4, 5, 6];
     * this.01_helper.array.unionUniqueArrayValues(arrayA, arrayB); // [1, 2, 3, 4, 5, 6]
     */
    public unionUniqueArrayValues(a: any[], b: any[]): any[] {
        return Array.from(new Set([...a, ...b]));
    }

    /**
     * Пересечение уникальных значений в массивах
     * @examples
     * const arrayA = [1, 2, 3, 3, 4, 5];
     * const arrayB = [2, 3, 2];
     * this.01_helper.array.intersectionUniqueInArrays(arrayA, arrayB); // [2, 3]
     */
    public intersectionUniqueInArrays(a: any[], b: any[]): any[] {
        return Array.from(new Set(a.filter(Set.prototype.has, new Set(b))));
    }

    /**
     * Разность уникальных значений в обеих массивах
     * @examples
     * const arrayA = [1, 2, 3, 4, 5, 5];
     * const arrayB = [2, 3, 7, 7, 8];
     * this.01_helper.array.differenceUniqueInArrays(arrayA, arrayB); // [1, 4, 5, 7, 8]
     */
    public differenceUniqueInArrays(a: any[], b: any[]): any[] {
        return Array.from(new Set(a.filter(num => !b.includes(num)).concat(b.filter(num => !a.includes(num)))));
    }

    /**
     * Разность уникальных значений одного массива от другого
     * @examples
     * const arrayA = [1, 2, 3, 4, 5, 5];
     * const arrayB = [2, 3, 7, 7, 8];
     * this.01_helper.array.differenceArrayFromAnother(arrayA, arrayB); // [1, 4, 5]
     * [1, 4, 5] - этих значений из массива arrayA нет в массиве arrayB
     */
    public differenceArrayFromAnother(a: any[], b: any[]): any[] {
        return Array.from(new Set(a.filter(num => !b.includes(num))));
    }

    /**
     * Конвертация массива в объект
     * @param arr - массив
     */
    public conversionToObject(arr) {
        return { ...arr }; // ['a','b','c']  -> {0: "a", 1: "b", 2: "c"}

    }

    /**
     * Конвертация двух ДВУМЕРНЫХ массивов в объект - ИТОГ = {foo: 'bar', baz: 42}
     * @param arr1 - ДВУМЕРНЫЙ МАССИВ ['foo', 'bar']
     * @param arr2 - ДВУМЕРНЫЙ МАССИВ ['baz', 42]
     */
    public conversionToObjectTwoDimensionalArray(arr1, arr2) {
        // @ts-ignore
        return Object.fromEntries([ arr1, arr2 ]); // fromEntries - МОЖНО ТОЛЬКО ДВУМЕРНЫЙ МАССИВ В ОБЪЕКТ ПРЕОБРАЗОВАТЬ
    }

    public checkArrayIsArray(arr: any[]): boolean {
        return Array.isArray(arr);
    }

    private _checkNumberIsNumber(item: number): boolean {
        return typeof item === 'number'; // Number.isInteger(item);
    }

    public getMax(arr: number[], startMax: number = Number.NEGATIVE_INFINITY): number | null {
        this._maxGetMax = startMax;

        if (this.checkArrayIsArray(arr)) {
            arr.forEach((item: number | number[]) => {
                if (this.checkArrayIsArray((item as number[]))) {
                    this.getMax((item as number[]), this._maxGetMax);
                } else if (this._checkNumberIsNumber((item as number))) {
                    this._maxGetMax = (item as number) > this._maxGetMax ? (item as number) : this._maxGetMax;
                } else if (!this._checkNumberIsNumber((item as number))) {
                    this._maxGetMax = null;
                }
            });
            setTimeout(() => { this._maxGetMax = Number.NEGATIVE_INFINITY; }, 0);

            return this._maxGetMax;
        }

        return null;
    }

    public getMin(arr: number[], startMin: number = Number.POSITIVE_INFINITY): number | null {
        this._maxGetMin = startMin;

        if (this.checkArrayIsArray(arr)) {
            arr.forEach((item: number | number[]) => {
                if (this.checkArrayIsArray((item as number[]))) {
                    this.getMin((item as number[]), this._maxGetMin);
                } else if (this._checkNumberIsNumber((item as number))) {
                    this._maxGetMin = (item as number) < this._maxGetMin ? (item as number) : this._maxGetMin;
                } else if (!this._checkNumberIsNumber((item as number))) {
                    this._maxGetMin = null;
                }
            });
            setTimeout(() => { this._maxGetMin = Number.POSITIVE_INFINITY; }, 0);

            return this._maxGetMin;
        }

        return null;
    }
}
