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
const County_1 = __importDefault(require("./County"));
const User_1 = __importDefault(require("./User"));
const Service_1 = __importDefault(require("./Service"));
const Order_1 = __importDefault(require("./Order"));
class SpecialistProfile extends Orm_1.BaseModel {
    constructor() {
        super(...arguments);
        this.page1 = false;
        this.page2 = false;
        this.page3 = false;
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], SpecialistProfile.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], SpecialistProfile.prototype, "userId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], SpecialistProfile.prototype, "address", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], SpecialistProfile.prototype, "city", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], SpecialistProfile.prototype, "countyId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "bio", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], SpecialistProfile.prototype, "dateOfBirth", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "gender", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], SpecialistProfile.prototype, "hireDate", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], SpecialistProfile.prototype, "terminationDate", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], SpecialistProfile.prototype, "license_number", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], SpecialistProfile.prototype, "id_number", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], SpecialistProfile.prototype, "licenseExpiryDate", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "available", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "enabled", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "checked", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], SpecialistProfile.prototype, "serviceId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "submitted", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "page1", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "page2", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "page3", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], SpecialistProfile.prototype, "completed", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => County_1.default),
    __metadata("design:type", Object)
], SpecialistProfile.prototype, "county", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default),
    __metadata("design:type", Object)
], SpecialistProfile.prototype, "user", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Service_1.default),
    __metadata("design:type", Object)
], SpecialistProfile.prototype, "service", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], SpecialistProfile.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], SpecialistProfile.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Order_1.default),
    __metadata("design:type", Object)
], SpecialistProfile.prototype, "orders", void 0);
exports.default = SpecialistProfile;
//# sourceMappingURL=SpecialistProfile.js.map