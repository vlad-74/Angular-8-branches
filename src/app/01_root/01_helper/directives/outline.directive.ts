import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { environment } from '@environments/environment';

@Directive({
    selector: '[outline]',
})
export class OutlineDirective {
    @Input() public value;

    private _defaultType: string = '1px dashed red';

    public constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) {}

    public ngOnInit() {
        if (this.value) {
            this._defaultType = this.value;
        }

        if (!environment.production) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'outline', this._defaultType);
        }
    }
}
