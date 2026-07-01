"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class default_1 {
    /**
     * u4版本
     */
    static getUuid() {
        return (0, crypto_1.randomUUID)();
    }
}
exports.default = default_1;
