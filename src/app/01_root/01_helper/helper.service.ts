/* Группа сервисов для разработчика */

import { Injectable } from '@angular/core';
import { ArrayService } from './array.service';
import { CommonService } from './common.service';
import { DomService } from './dom.service';
import { ScreenService } from './screen.service';

@Injectable({ providedIn: 'root' })
@Injectable()
export class HelperService {

    public constructor(
        public array: ArrayService,
        public common: CommonService,
        public dom: DomService,
        public screen: ScreenService,
    ) {
    }
}
