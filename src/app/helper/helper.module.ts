import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { ScreenService } from './screen.service';
import { ArrayService } from './array.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        HelperService,
        ScreenService,
        ArrayService,
    ],
})
export class HelperModule {
}
