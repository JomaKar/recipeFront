var shoppingService = (function () {
    function shoppingService() {
        this.theIngredients = [];
    }
    shoppingService.prototype.getIngredients = function () {
        return this.theIngredients;
    };
    shoppingService.prototype.addIngredients = function (newIngredients) {
        Array.prototype.push.apply(this.theIngredients, newIngredients);
    };
    return shoppingService;
}());
export { shoppingService };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/services/shopping.service.js.map