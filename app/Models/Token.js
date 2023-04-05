"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const User_1 = __importDefault(require("./User"));
class Token extends Orm_1.BaseModel {
    static async generateVerifyEmailToken(user) {
        const token = Helpers_1.string.generateRandom(64);
        await Token.expireTokens(user, 'verifyEmailTokens');
        const record = await user.related('tokens').create({
            type: 'VERIFY_EMAIL',
            expiresAt: luxon_1.DateTime.now().plus({ hours: 24 }),
            token
        });
        return record.token;
    }
    static async generatePasswordResetToken(user) {
        const token = Helpers_1.string.generateRandom(64);
        if (!user)
            return token;
        await Token.expireTokens(user, 'passwordResetTokens');
        const record = await user.related('tokens').create({
            type: 'PASSWORD_RESET',
            expiresAt: luxon_1.DateTime.now().plus({ hour: 1 }),
            token
        });
        return record.token;
    }
    static async expireTokens(user, relationName) {
        await user.related(relationName).query().update({
            expiresAt: luxon_1.DateTime.now()
        });
    }
    static async getTokenUser(token, type) {
        const record = await Token.query()
            .preload('user')
            .where('token', token)
            .where('type', type)
            .where('expiresAt', '>', luxon_1.DateTime.now().toSQL())
            .orderBy('createdAt', 'desc')
            .first();
        return record?.user;
    }
    static async verify(token, type) {
        const record = await Token.query()
            .where('expiresAt', '>', luxon_1.DateTime.now().toSQL())
            .where('token', token)
            .where('type', type)
            .first();
        return !!record;
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Token.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Token.prototype, "userId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Token.prototype, "type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Token.prototype, "token", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", Object)
], Token.prototype, "expiresAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Token.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Token.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default),
    __metadata("design:type", Object)
], Token.prototype, "user", void 0);
exports.default = Token;
//# sourceMappingURL=Token.js.map