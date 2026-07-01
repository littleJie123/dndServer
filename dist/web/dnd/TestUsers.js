"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class TestUsers extends fastsaas_1.Control {
    async doExecute(req, resp) {
        console.log('111123');
        return {};
    }
}
exports.default = TestUsers;
