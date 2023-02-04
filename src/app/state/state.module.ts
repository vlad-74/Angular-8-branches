import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsService } from './actions.service';
import { StateService } from './state.service';
import { ThemeService } from './theme.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        ActionsService,
        StateService,
        ThemeService,
    ],
})
export class StateModule {
}
