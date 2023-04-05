"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get("/login", "AuthenticationController.login_page").as("login_page");
    Route_1.default.post("/login", "AuthenticationController.login_action").as("login_action");
    Route_1.default.get("/register", "AuthenticationController.register_page").as("register_page");
    Route_1.default.post("/register", "AuthenticationController.register_action").as("register_action");
    Route_1.default.get("/logout", "AuthenticationController.logout").as("logout");
}).as("auth");
Route_1.default.group(() => {
    Route_1.default.get("/", async ({ view }) => {
        return view.render("welcome");
    }).as("home");
    Route_1.default.group(() => {
        Route_1.default.get("/", "UsersController.index").as("index");
    })
        .prefix("users")
        .as("users")
        .middleware(["role:admin"]);
    Route_1.default.group(() => {
        Route_1.default.get("/", "ServicesController.index").as("index");
    })
        .prefix("services")
        .as("services")
        .middleware(["role:admin"]);
    Route_1.default.group(() => {
        Route_1.default.get("/", "CountiesController.index").as("index");
    })
        .prefix("counties")
        .as("counties")
        .middleware(["role:admin"]);
}).middleware(["auth", "verifyEmail", "staffProfile"]);
Route_1.default.get("/users/edit-profile/:id", "UsersController.edit_profile")
    .as("users.edit_profile")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.post("/users/save-draft-1/:id", "UsersController.saveProfileDraft")
    .as("users.saveProfileDraft")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.post("/users/add-experience/:id", "UsersController.addExperience")
    .as("users.addExperience")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.get("/users/delete-experience/:id", "UsersController.deleteExperience")
    .as("users.deleteExperience")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.get("/users/complete-experience/:id", "UsersController.completeExperience")
    .as("users.completeExperience")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.post("/users/add-cert/:id", "UsersController.addCert")
    .as("users.addCert")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.get("/users/delete-cert/:id", "UsersController.deleteCert")
    .as("users.deleteCert")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.get("/users/complete-cert/:id", "UsersController.completeCert")
    .as("users.completeCert")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.get("/users/profile/:id", "UsersController.profile")
    .as("users.profile")
    .middleware(["auth", "verifyEmail"]);
Route_1.default.group(() => {
    Route_1.default.get("/bank-accounts", "AccountingController.bankAccounts").as("bankAccounts");
    Route_1.default.get("/bank-account-ledger/:id", "AccountingController.bankAccountLedger").as("bankAccountLedger");
    Route_1.default.get("/mobile-transactions", "AccountingController.mobileTransactions").as("mobileTransactions");
})
    .as("accounting")
    .prefix("accounting");
Route_1.default.group(() => {
    Route_1.default.get("/mobile-transactions", "AccountingController.mobileTransactions").as("mobile");
    Route_1.default.get("/card-transactions", "AccountingController.cardTransactions").as("creditCard");
})
    .as("transactions")
    .prefix("transactions");
Route_1.default.group(() => {
    Route_1.default.get("/index", "StaffController.index").as("index");
    Route_1.default.get("/pending", "StaffController.pending").as("pending");
}).as('staff').prefix('staff');
//# sourceMappingURL=routes.js.map