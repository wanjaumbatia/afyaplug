"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const County_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/County"));
class CountiesController {
    async index({ view }) {
        const counties = await County_1.default.query().orderBy("code");
        return view.render('counties/index', { counties });
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = CountiesController;
//# sourceMappingURL=CountiesController.js.map