/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ ЛОГИРОВАНИЯ
 */
export abstract class LogComponent {
    /**
     * классы / компоненты которых не нужно логировать
     */
    private isNotLog = [''];

    /**
     * Логируем, если наименование класса / компонента нет в isNotLog
     *
     * currentAppSnapshot - состояние приложения
     *
     * type - определяет что будет логироваться
     */
    public log(currentAppSnapshot, type = 'default') {
        if (!this.getIsNotLog()) {
            const result = [this.constructor.name];

            if (currentAppSnapshot && type === 'default') {
                if (currentAppSnapshot.appHistory) {
                    const index = currentAppSnapshot.appHistory.length - 1;
                    const arrCurrentRoute = currentAppSnapshot.appHistory[index].split('/');
                    const i = arrCurrentRoute.length - 1;
                    const page = arrCurrentRoute[i];

                    result.push(page);
                }
                result.push(
                    currentAppSnapshot.itemChange,
                    currentAppSnapshot,
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
