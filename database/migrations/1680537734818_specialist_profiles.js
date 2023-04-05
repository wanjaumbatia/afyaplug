"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "specialist_profiles";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table
                .integer("user_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE");
            table.string("name").notNullable();
            table.string("address").nullable().defaultTo("");
            table.string("city").nullable().defaultTo("");
            table
                .integer("county_id")
                .unsigned()
                .references("id")
                .inTable("counties")
                .onDelete("CASCADE");
            table.string("bio").nullable().defaultTo("");
            table.string("phone").nullable();
            table.string("email").notNullable();
            table.date("date_of_birth").nullable();
            table.string("gender").nullable().defaultTo("");
            table.date("hire_date").nullable();
            table.date("termination_date").nullable();
            table.string("status").defaultTo("Open");
            table.string("license_number").nullable().defaultTo("");
            table.date("license_expiry_date").nullable();
            table
                .integer("service_id")
                .unsigned()
                .references("services.id")
                .onDelete("CASCADE");
            table.boolean("available").defaultTo(false);
            table.boolean("enabled").defaultTo(false);
            table.boolean("checked").defaultTo(false);
            table.boolean("submitted").defaultTo(false);
            table.boolean("completed").defaultTo(false);
            table.boolean("page1").defaultTo(false);
            table.boolean("page2").defaultTo(false);
            table.boolean("page3").defaultTo(false);
            table.integer("id_number").nullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680537734818_specialist_profiles.js.map