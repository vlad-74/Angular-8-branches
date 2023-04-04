import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LogComponent } from '@helper/extends/log.component';
import { ILogParam, IOutlineParam } from '@interfaces/helper.interface';
import { CheckpointsService, IWatcher } from '@checkpoints/checkpoints.service';

/**
 * КЛАСС ДЛЯ НАСЛЕДОВАНИЯ КОМПОНЕНТАМИ
 *
 * при наследовании получают
 * @param currentAppSnapshot - состояние приложения
 */
export abstract class CheckpointsComponent extends LogComponent {
    public $checkpoints: IWatcher;
    private readonly destroyed$ = new Subject();

    protected constructor(
        public checkpoints: CheckpointsService,
        public logParam: ILogParam,
        public outlineParam: IOutlineParam,
    ) {
        super(logParam, outlineParam);

        this.checkpoints._appCheckpoints$
            .pipe( takeUntil(this.destroyed$) )
            .subscribe((value: IWatcher) => {
                /**
                 * this.$checkpoints - будет доступна во всех наследуемых компонентах
                 */
                this.$checkpoints = value ;

            /**
             * логирование из наследуемого класса LogComponent
             * при this.logParam.type === 'default' передавать appSnapshot приложения
             */
                if (this.logParam.type && value) { this.log(this.$checkpoints); }
            });
    }

    /* Отписываемся от подписок */
    public onDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
