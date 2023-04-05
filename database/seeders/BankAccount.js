"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const BankAccount_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BankAccount"));
const BankAccountLedger_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BankAccountLedger"));
class default_1 extends Seeder_1.default {
    async run() {
        await BankAccount_1.default.createMany([
            {
                name: "MPESA",
                branch: 'Kenya',
                enabled: true,
                mobile: true,
            },
        ]);
        await BankAccountLedger_1.default.createMany([
            {
                amount: 1000,
                bank_account_id: 1,
                debit: 1000,
                reference: 'RTYUGFGUYF',
                transactionDate: new Date(),
                description: "Test Transaction 1"
            },
            {
                amount: -400,
                bank_account_id: 1,
                credit: 400,
                reference: 'RTYUGFGUYF',
                transactionDate: new Date(),
                description: "Test Transaction 1"
            },
            {
                amount: 200,
                bank_account_id: 1,
                debit: 200,
                reference: 'QWERTYUJ',
                transactionDate: new Date(),
                description: "Test Transaction 2"
            },
            {
                amount: -800,
                bank_account_id: 1,
                credit: 800,
                reference: "RTYUIJBVG",
                transactionDate: new Date(),
                description: "Test Transaction 3"
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=BankAccount.js.map