import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperModule } from '../helper/helper.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [WrapperComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HelperModule,
        RouterModule,
    ],
})
export class SharedModule {
}
