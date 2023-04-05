"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Roles_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Enums/Roles"));
class Role {
    async handle({ response, auth }, next, guards) {
        const roleIds = guards.map(guard => Roles_1.default[guard.toUpperCase()]);
        if (!roleIds.includes(auth.user?.roleId)) {
            return response.unauthorized({ error: `This is restricted to ${guards.join(', ')} users` });
        }
        await next();
    }
}
exports.default = Role;
//# sourceMappingURL=Role.js.map