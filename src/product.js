"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, serial_number, make, model) {
        this.name = name;
        this.serial_number = serial_number;
        this.make = make;
        this.model = model;
    }
    Product.prototype.equals = function (other) {
        return this.name === other.name &&
            this.serial_number === other.serial_number &&
            this.make === other.make &&
            this.model === other.model;
    };
    return Product;
}());
exports.default = Product;
