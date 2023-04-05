"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Service"));
class ServicesController {
    async index({ view }) {
        const services = await Service_1.default.query().orderBy("name");
        return view.render("services/index", { services });
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = ServicesController;
//# sourceMappingURL=ServicesController.js.map