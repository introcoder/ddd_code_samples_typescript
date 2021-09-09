"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
/**
 Claim represents a request for a benefit on an extended warranty. It contains a
 set of purchase orders that provide information about any repairs and associated costs that may have occurred for a claim.
*/
var Claim = /** @class */ (function () {
    function Claim(amount, failure_date) {
        this.amount = amount;
        this.failure_date = failure_date;
        this.repair_pos = [];
        this.id = uuid_1.v4(); // Autoassigned
    }
    return Claim;
}());
exports.default = Claim;
