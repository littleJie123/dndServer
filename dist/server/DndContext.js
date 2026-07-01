"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
const path_1 = __importDefault(require("path"));
fastsaas_1.ConfigFac.init(path_1.default.join(__dirname, '../../config'));
let fileContext = new fastsaas_1.FileContext();
fileContext.loadFromPath(path_1.default.join(__dirname, "../biz"));
exports.default = fileContext;
