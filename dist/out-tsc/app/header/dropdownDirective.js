var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
var DropdownDirective = (function () {
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
    function DropdownDirective(el, rend) {
        this.el = el;
        this.rend = rend;
        this.open = false;
    }
    DropdownDirective.prototype.click = function () {
        this.rend.setElementClass(this.el.nativeElement, 'open', true);
    };
    DropdownDirective.prototype.getOut = function () {
        this.rend.setElementClass(this.el.nativeElement, 'open', false);
    };
    return DropdownDirective;
}());
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "click", null);
__decorate([
    HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "getOut", null);
DropdownDirective = __decorate([
    Directive({
        selector: '[drop-directive]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/header/dropdownDirective.js.map