"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpecialistProfile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/SpecialistProfile"));
class StaffController {
    async index({ view }) {
        const staff = await SpecialistProfile_1.default.query()
            .preload("county")
            .preload("user")
            .preload("service");
        return view.render("staff/index", { staff });
    }
    async pending({ view }) {
        const staff = await SpecialistProfile_1.default.query()
            .where("status", "Open")
            .preload("county")
            .preload("user")
            .preload("service");
        return view.render("staff/pending", { staff });
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = StaffController;
//# sourceMappingURL=StaffController.js.map