"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
Adjudicate/adjudication - a judgment made on a claim to determine whether
we are legally obligated to process the claim against the warranty. From
Wikipedia (https://en.wikipedia.org/wiki/Adjudication):

"Claims adjudication" is a phrase used in the insurance industry to refer to
the process of paying claims submitted or denying them after comparing claims
to the benefit or coverage requirements.
*/
var Claims_Adjudication = /** @class */ (function () {
    function Claims_Adjudication() {
    }
    Claims_Adjudication.prototype.adjudicate = function (contract, new_claim) {
        var claim_total = 0.0;
        contract.claims.forEach(function (claim) { return claim_total += claim.amount; });
        if (((contract.purchase_price - claim_total) * 0.8 > new_claim.amount) &&
            (contract.status == 'ACTIVE') &&
            (new_claim.failure_date >= contract.effective_date) &&
            (new_claim.failure_date <= contract.expiration_date)) {
            contract.claims.push(new_claim);
        }
    };
    return Claims_Adjudication;
}());
exports.default = Claims_Adjudication;
