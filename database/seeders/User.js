"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class default_1 extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                name: "Test Customer",
                roleId: 2,
                email: "customer@adonisjs.com",
                password: "123@Team",
                phone: "0712345678"
            },
            {
                name: "Test Staff",
                roleId: 3,
                email: "staff@adonisjs.com",
                password: "123@Team",
                phone: "0712345678"
            },
            {
                name: "Francis Mbatia",
                roleId: 1,
                email: "wanjaumbatia@gmail.com",
                password: "123@Team",
                phone: "0712345678"
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=User.js.map