"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
// Contract represents an extended warranty for a covered product.
// A contract is in a PENDING state prior to the effective date,
// ACTIVE between effective and expiration dates, and EXPIRED after
// the expiration date.
var Contract = /** @class */ (function () {
    function Contract(purchase_price, product, effective_date, expiration_date, purchase_date) {
        this.purchase_price = purchase_price;
        this.covered_product = product;
        this.effective_date = effective_date;
        this.expiration_date = expiration_date;
        this.purchase_date = purchase_date;
        this.id = uuid_1.v4(); // Autoassigned
        this.status = 'PENDING';
        this.claims = [];
    }
    return Contract;
}());
exports.default = Contract;
