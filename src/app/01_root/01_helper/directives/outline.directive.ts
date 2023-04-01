import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { environment } from '@environments/environment';

@Directive({
    selector: '[outline]',
})
export class OutlineDirective {
    @Input() public value;

    private _defaultType: string = '3px dashed ';

    public constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) {}

    public ngOnInit() {
        if (this.value) {
            this._defaultType = this.value;
        } else {

            const color = hhh.dom.colorGeneration();

            this._defaultType = this._defaultType + color;
        }

        if (!environment.production) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'outline', this._defaultType);
        }
    }
}
