"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var contract_1 = __importDefault(require("../contract"));
var product_1 = __importDefault(require("../product"));
var claim_1 = __importDefault(require("../claim"));
var claims_adjudication_1 = __importDefault(require("../claims_adjudication"));
function fakeContract() {
    var product = new product_1.default('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var contract = new contract_1.default(100.0, product, new Date(2010, 5, 8), new Date(2012, 5, 8), new Date(2009, 5, 8));
    contract.status = 'ACTIVE';
    return contract;
}
test('Adjudicate valid claim', function () {
    var contract = fakeContract();
    var claim = new claim_1.default(79.0, new Date(2010, 5, 8));
    new claims_adjudication_1.default().adjudicate(contract, claim);
    expect(contract.claims.length).toBe(1);
    expect(contract.claims[0].amount).toBe(79.0);
    expect(contract.claims[0].failure_date).toEqual(new Date(2010, 5, 8));
});
test('Adjudicate claim with invalid amount', function () {
    var contract = fakeContract();
    var claim = new claim_1.default(81.0, new Date(2010, 5, 8));
    new claims_adjudication_1.default().adjudicate(contract, claim);
    expect(contract.claims.length).toBe(0);
});
test('Adjudicate claim for pending contract', function () {
    var contract = fakeContract();
    contract.status = 'PENDING';
    var claim = new claim_1.default(79.0, new Date(2010, 5, 8));
    new claims_adjudication_1.default().adjudicate(contract, claim);
    expect(contract.claims.length).toBe(0);
});
test('Adjudicate claim for pending contract', function () {
    var contract = fakeContract();
    contract.status = 'EXPIRED';
    var claim = new claim_1.default(79.0, new Date(2010, 5, 8));
    new claims_adjudication_1.default().adjudicate(contract, claim);
    expect(contract.claims.length).toBe(0);
});
test('Adjudicate claim prior to effective date', function () {
    var contract = fakeContract();
    var claim = new claim_1.default(79.0, new Date(2010, 5, 5));
    new claims_adjudication_1.default().adjudicate(contract, claim);
    expect(contract.claims.length).toBe(0);
});
test('Adjudicate claim after expiration date', function () {
    var contract = fakeContract();
    var claim = new claim_1.default(79.0, new Date(2012, 5, 9));
    new claims_adjudication_1.default().adjudicate(contract, claim);
    expect(contract.claims.length).toBe(0);
});
