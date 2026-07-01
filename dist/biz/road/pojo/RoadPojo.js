"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class RoadPojo {
}
__decorate([
    (0, fastsaas_1.Column)({ name: 'road_id' })
], RoadPojo.prototype, "roadId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'name' })
], RoadPojo.prototype, "name", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'area_id' })
], RoadPojo.prototype, "areaId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'target_id' })
], RoadPojo.prototype, "targetId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'context_id' })
], RoadPojo.prototype, "contextId", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'sys_add_time' })
], RoadPojo.prototype, "sysAddTime", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'sys_modify_time' })
], RoadPojo.prototype, "sysModifyTime", void 0);
__decorate([
    (0, fastsaas_1.Column)({ name: 'is_del' })
], RoadPojo.prototype, "isDel", void 0);
exports.default = RoadPojo;
