import { NgModule } from '@angular/core';
import { SleepRouting } from './sleep.routing';
import { SleepModule } from '@modules/01_module-screen/sleep/sleep.module';

@NgModule({
    imports: [
        SleepRouting,
        SleepModule,
    ],
})
export class RoutingSleepModule {
}
