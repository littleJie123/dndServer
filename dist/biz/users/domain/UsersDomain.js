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
const Md5Util_1 = __importDefault(require("../../../util/Md5Util"));
const JwtUtil_1 = __importDefault(require("../../../util/JwtUtil"));
let UsersDomain = class UsersDomain extends fastsaas_1.BaseDomain {
    getDao() {
        return this.usersDao;
    }
    async onEnterArea(user, area) {
        await this.usersDao.update({
            usersId: user.usersId,
            areaId: area.areaId
        });
    }
    changePswd(user) {
        let copyUser = { ...user };
        copyUser.pswd = Md5Util_1.default.md5(`${copyUser.name}|${copyUser.pswd}`);
        return copyUser;
    }
    async login(user) {
        user = this.changePswd(user);
        user = await this.usersDao.findOne({ name: user.name, pswd: user.pswd });
        if (user == null) {
            throw new Error('用户不存在或密码错误');
        }
        return user;
    }
    async add(user) {
        user = this.changePswd(user);
        try {
            await this.usersDao.add(user);
        }
        catch (e) {
            throw new Error('用户已经存在');
        }
        return user;
    }
    async buildToken(user) {
        return JwtUtil_1.default.buildRefreshTokens({
            usersId: user.usersId,
            name: user.name,
            role: user.role
        });
    }
};
__decorate([
    (0, fastsaas_1.Bean)()
], UsersDomain.prototype, "usersDao", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], UsersDomain.prototype, "socketContext", void 0);
UsersDomain = __decorate([
    (0, fastsaas_1.Server)()
], UsersDomain);
exports.default = UsersDomain;
