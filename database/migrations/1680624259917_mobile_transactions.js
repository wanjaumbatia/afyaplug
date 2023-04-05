"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'mobile_transactions';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('reference').notNullable();
            table.string('account_number').notNullable();
            table.decimal('amount').notNullable();
            table.date('transaction_date').notNullable();
            table.string('sender_name').notNullable();
            table.string('phone').notNullable();
            table.boolean('posted').defaultTo(false);
            table.date('posting_date').nullable();
            table.integer('order_id');
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680624259917_mobile_transactions.js.map