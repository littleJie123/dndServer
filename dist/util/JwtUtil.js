"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const S_refreshTokenTime = 1 * 24 * 3600; //refreshToken 过期时间是 1 天
const S_tokenTime = 1800; //token的过期时间是半小时
class JwtUtil {
    /**
     * 构建token
     * @param payload
     */
    static buildRefreshTokens(user) {
        if (user == null || user.usersId == null) {
            return null;
        }
        user = {
            usersId: user.usersId,
            name: user.name,
            role: user.role
        };
        let payload = { ...user };
        return {
            user,
            tokenTime: S_tokenTime * 1000,
            refreshTokenTime: S_refreshTokenTime * 1000,
            token: jsonwebtoken_1.default.sign(payload, this.getPrivateKey(), { algorithm: 'RS256', expiresIn: S_tokenTime }),
            refreshToken: jsonwebtoken_1.default.sign(payload, this.getPrivateKey(), { algorithm: 'RS256', expiresIn: S_refreshTokenTime }),
        };
    }
    static getPrivateKey() {
        if (this.privateKey == null) {
            this.privateKey = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../pem/private.pem'));
        }
        return this.privateKey;
    }
    static getPublicKey() {
        if (this.publicKey == null) {
            this.publicKey = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../pem/public.pem'));
        }
        return this.publicKey;
    }
    /**
     * 解码
     * @param token
     */
    static decode(token) {
        if (token == null) {
            return null;
        }
        let publicKey = this.getPublicKey();
        return new Promise(function (resolve, reject) {
            jsonwebtoken_1.default.verify(token, publicKey, (err, decoded) => {
                if (err) {
                    reject('JWT verification failed:' + err.message);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.default = JwtUtil;
