import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperModule } from '../helper/helper.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { StateModule } from '../state/state.module';

@NgModule({
    declarations: [
        WrapperComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HelperModule,
        StateModule,
    ],
})
export class SharedModule {
}
