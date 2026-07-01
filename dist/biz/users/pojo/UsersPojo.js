"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class UsersPojo {
}
__decorate([
    (0, fastsaas_1.Column)({ name: 'users_id' })
], UsersPojo.prototype, "usersId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'name' })
], UsersPojo.prototype, "name", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'context_id' })
], UsersPojo.prototype, "contextId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'sys_add_time' })
], UsersPojo.prototype, "sysAddTime", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'sys_modify_time' })
], UsersPojo.prototype, "sysModifyTime", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'is_del' })
], UsersPojo.prototype, "isDel", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'pswd' })
], UsersPojo.prototype, "pswd", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'role' })
], UsersPojo.prototype, "role", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'area_id' })
], UsersPojo.prototype, "areaId", void 0);
exports.default = UsersPojo;
