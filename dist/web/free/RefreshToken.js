"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
const JwtUtil_1 = __importDefault(require("../../util/JwtUtil"));
class default_1 extends fastsaas_1.Control {
    async doExecute(req, resp) {
        let payload = await JwtUtil_1.default.decode(this._param.refreshToken);
        let usersPojo = await this.usersDao.getById(payload.usersId);
        if (usersPojo == null || usersPojo.isDel == 1) {
            return null;
        }
        return this.usersDomain.buildToken(usersPojo);
    }
}
exports.default = default_1;
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "usersDao", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "usersDomain", void 0);
