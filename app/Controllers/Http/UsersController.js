"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const County_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/County"));
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
const SpecialistProfile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/SpecialistProfile"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Experience_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Experience"));
const Certification_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Certification"));
const Service_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Service"));
class UsersController {
    async index({ view }) {
        const users = await User_1.default.query().orderBy("email");
        const roles = await Role_1.default.query().orderBy("name");
        return view.render("users/manage", { users, roles });
    }
    async profile({ view, params }) {
        const user = await User_1.default.query().where("id", params.id).firstOrFail();
        const profile = await SpecialistProfile_1.default.query()
            .where("user_id", user?.id)
            .firstOrFail();
        const service = await Service_1.default.query()
            .where("id", profile.serviceId)
            .firstOrFail();
        const county = await County_1.default.query()
            .where("id", profile.countyId)
            .firstOrFail();
        return view.render("users/profile", { user, profile, service, county });
    }
    async edit_profile({ view, params, auth, response, }) {
        if (auth.user?.id != params.id) {
            return response.unauthorized({ error: `This page is restricted` });
        }
        const counties = await County_1.default.query()
            .where("enabled", true)
            .orderBy("name");
        const services = await Service_1.default.query()
            .where("enabled", true)
            .orderBy("name");
        const user = await User_1.default.query().where("id", params.id).firstOrFail();
        const profile = await SpecialistProfile_1.default.query()
            .where("user_id", user.id)
            .firstOrFail();
        if (profile.page3 == true) {
            await profile
                .merge({
                page1: false,
                page2: false,
                page3: false,
            })
                .save();
        }
        const experience = await Experience_1.default.query().where("specialist_profile_id", profile.id);
        const certs = await Certification_1.default.query().where("specialist_profile_id", profile.id);
        return view.render("users/edit-profile", {
            user,
            profile,
            counties,
            experience,
            certs,
            services,
        });
    }
    async saveProfileDraft({ request, response, params, }) {
        const dataValidator = Validator_1.schema.create({
            bio: Validator_1.schema.string([Validator_1.rules.minLength(10)]),
            gender: Validator_1.schema.string([Validator_1.rules.required()]),
            address: Validator_1.schema.string(),
            city: Validator_1.schema.string(),
            county: Validator_1.schema.string([
                Validator_1.rules.exists({ table: "counties", column: "id" }),
            ]),
            service: Validator_1.schema.string([
                Validator_1.rules.exists({ table: "services", column: "id" }),
            ]),
            id_number: Validator_1.schema.number(),
            license_number: Validator_1.schema.string(),
        });
        try {
            const data = await request.validate({ schema: dataValidator });
            const profile = await SpecialistProfile_1.default.query()
                .where("userId", params.id)
                .firstOrFail();
            await profile
                .merge({
                bio: data.bio,
                address: data.address,
                gender: data.gender,
                city: data.city,
                countyId: parseInt(data.county),
                serviceId: parseInt(data.service),
                license_number: data.license_number,
                id_number: data.id_number,
                page1: true,
            })
                .save();
        }
        catch (error) {
            console.log(error);
        }
        return response.redirect().back();
    }
    async addExperience({ request, response, params, }) {
        const validator = Validator_1.schema.create({
            company: Validator_1.schema.string(),
            to: Validator_1.schema.string(),
            from: Validator_1.schema.string(),
            description: Validator_1.schema.string(),
        });
        try {
            const data = await request.validate({ schema: validator });
            const profile = await SpecialistProfile_1.default.findOrFail(params.id);
            await Experience_1.default.create({
                specialistProfileId: profile.id,
                company: data.company,
                description: data.description,
                to: new Date(data.to),
                from: new Date(data.from),
            });
            return response
                .redirect()
                .toRoute("users.edit_profile", { id: profile.userId });
        }
        catch (error) {
            console.log(error);
        }
        return response.redirect().back();
    }
    async addCert({ request, response, params }) {
        const validator = Validator_1.schema.create({
            name: Validator_1.schema.string(),
            issueDate: Validator_1.schema.string(),
        });
        try {
            const data = await request.validate({ schema: validator });
            const profile = await SpecialistProfile_1.default.findOrFail(params.id);
            await Certification_1.default.create({
                specialistProfileId: profile.id,
                name: data.name,
                issueDate: new Date(data.issueDate),
            });
            return response
                .redirect()
                .toRoute("users.edit_profile", { id: profile.userId });
        }
        catch (error) {
            console.log(error);
        }
        return response.redirect().back();
    }
    async deleteExperience({ response, params }) {
        const experience = await Experience_1.default.findOrFail(params.id);
        const profile = await SpecialistProfile_1.default.findOrFail(experience.specialistProfileId);
        await experience.delete();
        return response
            .redirect()
            .toRoute("users.edit_profile", { id: profile.userId });
    }
    async deleteCert({ response, params }) {
        const cert = await Certification_1.default.findOrFail(params.id);
        const profile = await SpecialistProfile_1.default.findOrFail(cert.specialistProfileId);
        await cert.delete();
        return response
            .redirect()
            .toRoute("users.edit_profile", { id: profile.userId });
    }
    async completeExperience({ response, params }) {
        const profile = await SpecialistProfile_1.default.query()
            .where("user_id", params.id)
            .firstOrFail();
        await profile
            .merge({
            page2: true,
        })
            .save();
        return response
            .redirect()
            .toRoute("users.edit_profile", { id: profile.userId });
    }
    async completeCert({ response, params }) {
        const profile = await SpecialistProfile_1.default.query()
            .where("user_id", params.id)
            .firstOrFail();
        await profile
            .merge({
            page3: true,
            completed: true,
        })
            .save();
        return response.redirect().toRoute("users.profile", { id: profile.userId });
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map