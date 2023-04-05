"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BankAccount"));
const BankAccountLedger_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BankAccountLedger"));
const MobileTransaction_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MobileTransaction"));
class AccountingController {
    async bankAccounts({ view }) {
        var accounts = await BankAccount_1.default.query().orderBy("name");
        return view.render("accounting/bank-accounts", { accounts });
    }
    async bankAccountLedger({ view, params }) {
        var account = await BankAccount_1.default.query()
            .where("id", params.id)
            .firstOrFail();
        var entries = await BankAccountLedger_1.default.query()
            .orderBy("id", "desc")
            .where("bank_account_id", account.id);
        return view.render("accounting/bank-account-ledger", { account, entries });
    }
    async mobileTransactions({ view }) {
        const transactions = await MobileTransaction_1.default.query().orderBy('id', 'desc');
        return view.render("accounting/mobile-transactions", { transactions });
    }
    async cardTransactions({ view }) {
        return view.render("accounting/card-transactions");
    }
}
exports.default = AccountingController;
//# sourceMappingURL=AccountingController.js.map