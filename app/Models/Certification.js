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
const SpecialistProfile_1 = __importDefault(require("./SpecialistProfile"));
class Certification extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Certification.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Certification.prototype, "specialistProfileId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Certification.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Certification.prototype, "issueDate", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Certification.prototype, "expiryDate", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], Certification.prototype, "nonExpiry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Certification.prototype, "file", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => SpecialistProfile_1.default),
    __metadata("design:type", Object)
], Certification.prototype, "role", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Certification.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Certification.prototype, "updatedAt", void 0);
exports.default = Certification;
//# sourceMappingURL=Certification.js.map