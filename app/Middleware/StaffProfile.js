"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpecialistProfile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/SpecialistProfile"));
class StaffProfile {
    async handle({ auth, response }, next) {
        if (auth.user && auth.user.roleId == 3) {
            const profile = await SpecialistProfile_1.default.query()
                .where("user_id", auth.user.id)
                .first();
            if (!profile) {
                await SpecialistProfile_1.default.create({
                    name: auth.user.name,
                    email: auth.user.email,
                    userId: auth.user.id,
                    phone: auth.user.phone,
                });
                return response
                    .redirect()
                    .toRoute("users.edit_profile", { id: auth.user.id });
            }
            else {
                if (profile.completed == false) {
                    return response
                        .redirect()
                        .toRoute("users.edit_profile", { id: auth.user.id });
                }
                else {
                    await next();
                }
            }
        }
        else {
            await next();
        }
    }
}
exports.default = StaffProfile;
//# sourceMappingURL=StaffProfile.js.map