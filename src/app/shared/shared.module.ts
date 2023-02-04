import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperModule } from '../helper/helper.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';

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
    ],
})
export class SharedModule {
}
