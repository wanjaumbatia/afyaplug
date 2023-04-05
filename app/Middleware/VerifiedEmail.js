"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifiedEmail {
    async handle({ auth, view }, next) {
        if (auth.user && !auth.user.isEmailVerified) {
            view.share({ nonVerifiedEmail: true });
        }
        await next();
    }
}
exports.default = VerifiedEmail;
//# sourceMappingURL=VerifiedEmail.js.map