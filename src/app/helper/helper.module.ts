import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayService } from './array.service';
import { CommonService } from './common.service';
import { DomService } from './dom.service';
import { HelperService } from './helper.service';
import { ScreenService } from './screen.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        ArrayService,
        CommonService,
        DomService,
        HelperService,
        ScreenService,
    ],
})
export class HelperModule {
}
