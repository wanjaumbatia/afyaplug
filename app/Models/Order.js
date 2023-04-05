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
const User_1 = __importDefault(require("./User"));
const Service_1 = __importDefault(require("./Service"));
const County_1 = __importDefault(require("./County"));
const SpecialistProfile_1 = __importDefault(require("./SpecialistProfile"));
class Order extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "orderId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "city", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "serviceId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "countyId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "specialistProfileId", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default),
    __metadata("design:type", Object)
], Order.prototype, "user", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Service_1.default),
    __metadata("design:type", Object)
], Order.prototype, "service", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => County_1.default),
    __metadata("design:type", Object)
], Order.prototype, "county", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => SpecialistProfile_1.default),
    __metadata("design:type", Object)
], Order.prototype, "specialistProfile", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Order.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Order.prototype, "updatedAt", void 0);
exports.default = Order;
//# sourceMappingURL=Order.js.map