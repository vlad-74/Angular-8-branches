import { HostBinding } from '@angular/core';
import { environment } from '@environments/environment';
import { IOutlineParam } from '@interfaces/helper.interface';
/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ
 *
 * при наследовании получают outline для элемента компонента
 */

export abstract class OutlineComponent {
    // если ГЛОБАЛЬНО нужны outline
    private isGlobalOutline = true; // false - если нужно отменить

    // классы / компоненты которым не нужна outline
    private isNotOutline = [''];

    protected constructor(
        public outline: IOutlineParam,
    ) {}
    @HostBinding('style.outline') public color: string = this.getColor();

    /**
     * Отображаем outline,
     * если находимся в режиме разработки,
     * есть this.isGlobalOutline с this.outline.px
     * и наименование класса/компонента нет в isNotOutline
     */
    public getColor() {
        if (!environment.production && this.isGlobalOutline && this.outline.isGlobalOutline && this.outline.px && !this.getIsNotOutline()) {
            return this.color = this.outline.px + 'px solid ' + hhh.dom.colorGeneration();
        }

        return null;
    }

    /**
     * Проверяем есть ли наименование класса / компонента в isNotOutline
     */
    private getIsNotOutline() {
        if (this.isNotOutline.includes(this.constructor.name)) {
            return true;
        }

        return false;
    }
}
