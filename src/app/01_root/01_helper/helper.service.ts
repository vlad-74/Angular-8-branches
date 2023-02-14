/* Группа сервисов для разработчика */

import { Injectable } from '@angular/core';
import { ArrayService } from '@helper/array.service';
import { CommonService } from '@helper/common.service';
import { DomService } from '@helper/dom.service';
import { ScreenService } from '@helper/screen.service';
import { UniqueService } from '@helper/unique.service';

@Injectable({ providedIn: 'root' })
export class HelperService {

    public constructor(
        public array: ArrayService,
        public common: CommonService,
        public dom: DomService,
        public screen: ScreenService,
        public unique: UniqueService,
    ) {
    }
}
