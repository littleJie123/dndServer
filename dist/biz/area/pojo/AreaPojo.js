"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class AreaPojo {
}
__decorate([
    (0, fastsaas_1.Column)({ name: 'area_id' })
], AreaPojo.prototype, "areaId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'x' })
], AreaPojo.prototype, "x", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'y' })
], AreaPojo.prototype, "y", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'z' })
], AreaPojo.prototype, "z", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'name' })
], AreaPojo.prototype, "name", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'remark' })
], AreaPojo.prototype, "remark", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'is_del' })
], AreaPojo.prototype, "isDel", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'context_id' })
], AreaPojo.prototype, "contextId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'sys_add_time' })
], AreaPojo.prototype, "sysAddTime", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'sys_modify_time' })
], AreaPojo.prototype, "sysModifyTime", void 0);
exports.default = AreaPojo;
