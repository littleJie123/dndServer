"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class default_1 extends fastsaas_1.SocketProcessor {
    setUser(user) {
        if (user != null) {
            this.user = {
                usersId: user.usersId,
                role: user.role
            };
        }
    }
    getUser() {
        return this.user;
    }
}
exports.default = default_1;
