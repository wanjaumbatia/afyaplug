"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const County_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/County"));
class default_1 extends Seeder_1.default {
    async run() {
        await County_1.default.createMany([
            { code: '001', name: 'Mombasa' },
            { code: '002', name: 'Kwale' },
            { code: '003', name: 'Kilifi' },
            { code: '004', name: 'Lamu' },
            { code: '005', name: 'Tana River' },
            { code: '006', name: 'Taita Taveta' },
            { code: '007', name: 'Makueni' },
            { code: '006', name: 'Kajiado' },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=County.js.map