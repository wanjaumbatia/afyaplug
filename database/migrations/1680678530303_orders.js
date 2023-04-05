"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'orders';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('orderId').notNullable();
            table.string('descrition').notNullable();
            table.string('address').nullable();
            table.string('city').nullable();
            table.integer('user_id').unsigned().references("users.id").onDelete("CASCADE");
            table.integer('service_id').unsigned().references("services.id").onDelete("CASCADE");
            table.integer('county_id').unsigned().references("counties.id").onDelete("CASCADE");
            table.integer('specialist_profile_id').unsigned().references("specialist_profiles.id").onDelete("CASCADE");
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680678530303_orders.js.map