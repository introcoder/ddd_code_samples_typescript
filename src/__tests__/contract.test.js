"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var contract_1 = __importDefault(require("../contract"));
var product_1 = __importDefault(require("../product"));
test('contract is set up properly', function () {
    var product = new product_1.default('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var contract = new contract_1.default(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));
    expect(contract.id).toBeDefined();
    expect(contract.purchase_price).toBe(100.0);
    expect(contract.status).toEqual('PENDING');
    expect(contract.purchase_date).toEqual(new Date(2010, 5, 7));
    expect(contract.effective_date).toEqual(new Date(2010, 5, 8));
    expect(contract.expiration_date).toEqual(new Date(2013, 5, 8));
    expect(contract.covered_product.name).toEqual('dishwasher');
    expect(contract.covered_product.serial_number).toEqual('OEUOEU23');
    expect(contract.covered_product.make).toEqual('Whirlpool');
    expect(contract.covered_product.model).toEqual('7DP840CWDB0');
});
// entities compare by unique IDs, not properties
test('contract equality', function () {
    var product = new product_1.default('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var contract1 = new contract_1.default(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));
    var contract2 = new contract_1.default(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));
    var contract3 = new contract_1.default(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));
    var expected_id = uuid_1.v4();
    contract1.id = expected_id;
    contract2.id = expected_id;
    expect(contract1.id).toEqual(contract2.id);
    contract3.id = uuid_1.v4();
    expect(contract1.id).not.toEqual(contract3.id);
});
