import { Directive, HostBinding, ElementRef, Renderer } from '@angular/core'

@Directive({
	selector: '[listOnForm]'
})

export class ListOnFormAttrDirective{
	//bouth ways are correct
	constructor(private elR: ElementRef, private ren: Renderer){
		this.ren.setElementStyle(this.elR.nativeElement, 'max-height', '150px');
	}

}