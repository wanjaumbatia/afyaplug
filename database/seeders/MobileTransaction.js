"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const MobileTransaction_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MobileTransaction"));
class default_1 extends Seeder_1.default {
    async run() {
        await MobileTransaction_1.default.createMany([
            {
                reference: "RD44EVJBMM",
                accountNumber: "12345678",
                amount: 4000,
                phone: "254707220224",
                senderName: "FRANCIS WANJAU MBATIA",
                transactionDate: new Date(),
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=MobileTransaction.js.map