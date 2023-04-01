import { ISnapshot } from '@interfaces/snapshot.interface';

/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ ЛОГИРОВАНИЯ
 */
export abstract class LogComponent {
    /**
     * классы / компоненты которых не нужно логировать
     */
    private isNotLog = [''];

    protected constructor(
        public logType: string,
    ) {}

    /**
     * Логируем, если есть this.logType и наименование класса / компонента нет в isNotLog
     */
    public log(...args) {
        if (this.logType && !this.getIsNotLog()) {
            const result = [this.constructor.name];

            // при this.logType === 'default' в ...args первым аргументом передавать appSnapshot приложения
            if (this.logType === 'default' && args.length === 1) {
                const snapshot: ISnapshot = hhh.object.objectCopy(args[0]);

                if (snapshot.appHistory) {
                    const index = snapshot.appHistory.length - 1;
                    const arrCurrentRoute = snapshot.appHistory[index].split('/');
                    const i = arrCurrentRoute.length - 1;
                    const page = arrCurrentRoute[i];

                    result.push(page);
                }
                result.push(
                    snapshot.itemChange,
                    hhh.object.objectCopy(args[0]),
                );
            }
            hhh.common.log(result);
        }
    }

    /**
     * Проверяем есть ли наименование класса / компонента в isNotLog
     */
    private getIsNotLog() {
        if (this.isNotLog.includes(this.constructor.name)) {
            return true;
        }

        return false;
    }
}
