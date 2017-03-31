import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[drop-directive]'
})

export class DropdownDirective{
	private open: boolean = false;

	// @HostBinding('class.open') get opened(){
	// 	return this.open;
	// }

	// @HostListener('click') openDrop(){
	// 	this.open = true;
	// }

	// @HostListener('mouseleave') out(){
	// 	this.open = false;
	// }


	//alternative way

	constructor(private el: ElementRef, private rend: Renderer){}

	@HostListener('click') click(){
		this.rend.setElementClass(this.el.nativeElement, 'open', true);
	}

	@HostListener('mouseleave') getOut(){
		this.rend.setElementClass(this.el.nativeElement, 'open', false);
	}
}