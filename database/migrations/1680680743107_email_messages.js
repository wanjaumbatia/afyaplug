"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "email_messages";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table.string("subject");
            table.string("sent_to");
            table.string("message");
            table.boolean("sent").defaultTo(true);
            table.string("order_id").nullable();
            table.string("attachment").nullable().defaultTo('');
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680680743107_email_messages.js.map