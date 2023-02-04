/* Функции для работы с массивами */

export class ArrayService {

    /*
    Получить случайный элемент из списка
    @example
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.helper.array.randomItemFromArray(months)
    */
    public randomItemFromArray(array: any[]): any {
        return array[Math.floor(Math.random() * (array.length))];
    }

    /*
    Объединение уникальных значений массива
    @example
    const arrayA = [1, 2, 3, 4];
    const arrayB = [3, 4, 5, 6];
    this.helper.array.unionUniqueArrayValues(arrayA, arrayB); // [1, 2, 3, 4, 5, 6]
    */
    public unionUniqueArrayValues(a: any[], b: any[]): any[] {
        return Array.from(new Set([...a, ...b]));
    }

    /*
    Пересечение уникальных значений в массивах
    @example
    const arrayA = [1, 2, 3, 3, 4, 5];
    const arrayB = [2, 3, 2];
    this.helper.array.intersectionUniqueInArrays(arrayA, arrayB); // [2, 3]
    */
    public intersectionUniqueInArrays(a: any[], b: any[]): any[] {
        return Array.from(new Set(a.filter(Set.prototype.has, new Set(b))));
    }

    /*
    Разность уникальных значений в обеих массивах
    @example
    const arrayA = [1, 2, 3, 4, 5, 5];
    const arrayB = [2, 3, 7, 7, 8];
    this.helper.array.differenceUniqueInArrays(arrayA, arrayB); // [1, 4, 5, 7, 8]
    */
    public differenceUniqueInArrays(a: any[], b: any[]): any[] {
        return Array.from(new Set(a.filter(num => !b.includes(num)).concat(b.filter(num => !a.includes(num)))));
    }

    /*
    Разность уникальных значений одного массива от другого
    @example
    const arrayA = [1, 2, 3, 4, 5, 5];
    const arrayB = [2, 3, 7, 7, 8];
    this.helper.array.differenceArrayFromAnother(arrayA, arrayB); // [1, 4, 5]
    [1, 4, 5] - этих значений из массива arrayA нет в массиве arrayB
    */
    public differenceArrayFromAnother(a: any[], b: any[]): any[] {
        return Array.from(new Set(a.filter(num => !b.includes(num))));
    }
}
