"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Service_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Service"));
class default_1 extends Seeder_1.default {
    async run() {
        await Service_1.default.createMany([
            { name: "Nurses" },
            { name: "Nurse Aid" },
            { name: "Physiotherapist" },
            { name: "Nanny Care" },
            { name: "Elderly Care" },
            { name: "Hospital Runs Assistant" },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Service.js.map