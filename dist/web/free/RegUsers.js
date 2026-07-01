"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class default_1 extends fastsaas_1.Control {
    async doExecute(req, resp) {
        let socket = this.socketProcessor;
        let userCnt = await this.usersDao.findCnt({ name: this._param.name });
        if (userCnt > 0) {
            throw new Error('该用户名已经存在。');
        }
        else {
            let user = await this.usersDomain.add(this._param);
            socket.setUser(user);
            return {
                userId: user.usersId,
                name: user.name
            };
        }
    }
}
exports.default = default_1;
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "usersDao", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "usersDomain", void 0);
