import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ],
})
export class SharedModule {
}
