"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class AuthenticationController {
    async login_page({ view }) {
        return view.render("auth/login");
    }
    async login_action({ request, response, session, auth, }) {
        const { email, password } = request.only(["email", "password"]);
        try {
            console.log(email + " " + password);
            await auth.attempt(email, password);
        }
        catch (error) {
            console.log(error);
            session.flash("errors", "Email or password is incorrect");
            return response.redirect().back();
        }
        if (auth.user && session.has("isVerifyingEmail")) {
            auth.user.isEmailVerified = true;
            await auth.user.save();
        }
        return response.redirect().toPath("/");
    }
    async register_page({ view }) {
        return view.render("auth/register");
    }
    async register_action({ request, response, session, auth, }) {
        const userValidator = Validator_1.schema.create({
            first_name: Validator_1.schema.string(),
            last_name: Validator_1.schema.string(),
            phone: Validator_1.schema.string(),
            email: Validator_1.schema.string([Validator_1.rules.email()]),
            password: Validator_1.schema.string([Validator_1.rules.confirmed()]),
        });
        try {
            const data = await request.validate({
                schema: userValidator,
                messages: {
                    "first_name.required": "First name is required.",
                    "last_name.required": "Last name is required.",
                    "email.required": "Email Address is required.",
                    "email.email": "Email Address should be valid.",
                    "password.required": "Password is required.",
                    "password_confirmation.confirmed": "Password do not match",
                },
            });
            console.log(data);
            const user = await User_1.default.create({
                name: data.first_name + " " + data.last_name,
                email: data.email,
                password: data.password,
            });
            await auth.login(user);
            await user.sendVerifyEmail();
            return response.redirect().toRoute("home");
        }
        catch (error) {
            session.flash(error.messages);
            console.log(error);
            return response.redirect().back();
        }
    }
    async logout({ response, auth }) {
        await auth.logout();
        return response.redirect().toPath("/");
    }
}
exports.default = AuthenticationController;
//# sourceMappingURL=AuthenticationController.js.map