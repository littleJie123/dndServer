"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
class Md5Util {
    static md5(str) {
        return crypto_js_1.default.MD5(str).toString();
    }
}
exports.default = Md5Util;
