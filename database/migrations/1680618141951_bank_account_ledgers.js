"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "bank_account_ledgers";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table.date("transaction_date").nullable();
            table.string("description").nullable().defaultTo("");
            table.decimal("debit").nullable().defaultTo(0);
            table.decimal("credit").nullable().defaultTo(0);
            table.string("reference").nullable().defaultTo("");
            table.string("narration").nullable().defaultTo("");
            table.decimal("amount").notNullable().defaultTo(0);
            table
                .integer("bank_account_id")
                .unsigned()
                .references("bank_accounts.id")
                .onDelete("CASCADE");
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680618141951_bank_account_ledgers.js.map