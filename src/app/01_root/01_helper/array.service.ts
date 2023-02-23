/* Функции для работы с массивами */

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArrayService {

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
}
