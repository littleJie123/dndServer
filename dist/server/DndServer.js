"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
const DndContext_1 = __importDefault(require("./DndContext"));
const path_1 = __importDefault(require("path"));
const DndSocket_1 = __importDefault(require("./DndSocket"));
(0, fastsaas_1.webServer)({
    context: DndContext_1.default,
    webPath: path_1.default.join(__dirname, '../web'),
    interceptorBeans: [
        'SocketContext'
    ],
    webSocketClazz: DndSocket_1.default,
    port: 3000,
    needWebSocketAction: true
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err.stack);
});
