"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "experiences";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table
                .integer("specialist_profile_id")
                .unsigned()
                .references("id")
                .inTable("specialist_profiles")
                .onDelete("CASCADE");
            table.string("company").notNullable();
            table.date("from").nullable();
            table.date("to").nullable();
            table.boolean("still_working").defaultTo(false);
            table.string("description").nullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680599438219_experiences.js.map