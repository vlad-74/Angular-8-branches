/* Группа сервисов для разработчика */

import { Injectable } from '@angular/core';
import { ArrayService } from '@helper/array.service';
import { CommonService } from '@helper/common.service';
import { DomService } from '@helper/dom.service';
import { AssetsJsonService } from '@helper/assets-json.service';
import { ScreenService } from '@helper/screen.service';
import { UniqueService } from '@helper/unique.service';
import { StorageService } from '@helper/storage.service';

@Injectable({ providedIn: 'root' })
export class HelperService {

    public constructor(
        public array: ArrayService,
        public common: CommonService,
        public dom: DomService,
        public jsonService: AssetsJsonService,
        public screen: ScreenService,
        public unique: UniqueService,
        public storage: StorageService,
    ) {
    }
}
