"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
const Roles_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Enums/Roles"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(Roles_1.default.USER);
            table.string('name', 255).notNullable();
            table.string('email', 255).notNullable().unique();
            table.string('phone', 255).notNullable();
            table.string('password', 180).notNullable();
            table.string('remember_me_token').nullable();
            table.boolean('is_email_verified').notNullable().defaultTo(false);
            table.boolean('email_notification').notNullable().defaultTo(true);
            table.boolean('sms_notification').notNullable().defaultTo(false);
            table.boolean('available').notNullable().defaultTo(false);
            table.boolean('enabled').notNullable().defaultTo(true);
            table.boolean('locked').notNullable().defaultTo(false);
            table.timestamp('created_at', { useTz: true }).notNullable();
            table.timestamp('updated_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1680496439201_users.js.map