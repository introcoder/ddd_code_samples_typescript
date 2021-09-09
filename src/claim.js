"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Claim = /** @class */ (function () {
    function Claim(amount, failure_date) {
        this.id = 0; // TODO: change to UUID
        this.amount = amount;
        this.failure_date = failure_date;
        this.repair_pos = [];
    }
    return Claim;
}());
exports.default = Claim;
