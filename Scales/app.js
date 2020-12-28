var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var result = 0;
        for (var i = 0; i < this.products.length; i++) {
            result = result + this.products[i].getScale();
        }
        return result;
    };
    Scales.prototype.getNameList = function () {
        var result = [];
        for (var i = 0; i < this.products.length; i++) {
            result.push(this.products[i].getName());
        }
        return result;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.name = '';
        this.scale = 0;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.scale = _scale;
        return _this;
    }
    Apple.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    Apple.prototype.getScale = function () {
        return _super.prototype.getScale.call(this);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.scale = _scale;
        return _this;
    }
    Tomato.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    Tomato.prototype.getScale = function () {
        return _super.prototype.getScale.call(this);
    };
    return Tomato;
}(Product));
var scales1 = new Scales();
var apple1 = new Apple('green apple', 100);
var apple2 = new Apple('red apple', 150);
var apple3 = new Apple('yellow apple', 200);
var tomato1 = new Tomato('red tomato', 55);
var tomato2 = new Tomato('pink tomato', 75);
scales1.add(apple1);
scales1.add(apple2);
scales1.add(apple3);
scales1.add(tomato1);
scales1.add(tomato2);
console.log(scales1.getNameList());
console.log(scales1.getSumScale());
//# sourceMappingURL=app.js.map