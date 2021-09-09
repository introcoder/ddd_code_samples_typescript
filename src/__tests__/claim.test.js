"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var claim_1 = __importDefault(require("../claim"));
var repair_po_1 = __importDefault(require("../repair_po"));
var line_item_1 = __importDefault(require("../line_item"));
test('claim is set up properly', function () {
    var description = "Replacement part for soap dispenser";
    var line_item1 = new line_item_1.default("PARTS", 45.0, description);
    var line_item2 = new line_item_1.default("LABOR", 50.0, "1 hour repair");
    var repair_po = new repair_po_1.default();
    repair_po.line_items.push(line_item1);
    repair_po.line_items.push(line_item2);
    var claim = new claim_1.default(100.0, new Date(2010, 5, 8));
    claim.repair_pos.push(repair_po);
    expect(claim.amount).toBe(100.0);
    expect(claim.failure_date).toEqual(new Date(2010, 5, 8));
    expect(claim.repair_pos[0].line_items[0].type).toBe('PARTS');
    expect(claim.repair_pos[0].line_items[0].amount).toBe(45.0);
    expect(claim.repair_pos[0].line_items[0].description).toBe(description);
});
// TODO: Add claim equality based on unique IDs, not properties