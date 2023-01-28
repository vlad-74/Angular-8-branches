import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';
import { ArrayService } from './array.service';

@Injectable()
export class HelperService {

    public constructor(
        public array: ArrayService,
        public screen: ScreenService,
    ) {
    }
}
