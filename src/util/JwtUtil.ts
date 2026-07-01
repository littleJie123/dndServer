import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import UsersDo from '../biz/users/pojo/UsersDo';
import Token from './dto/Token';


const S_refreshTokenTime = 1 * 24 * 3600;//refreshToken 过期时间是 1 天
const S_tokenTime = 1800; //token的过期时间是半小时

export default class JwtUtil {
  private static privateKey: Buffer;

  private static publicKey: Buffer;
  /**
   * 构建token
   * @param payload 
   */
  static buildRefreshTokens(user: UsersDo): Token {
    if (user == null || user.usersId == null) {
      return null;
    }
    user = {
      usersId: user.usersId,
      name: user.name,
      role: user.role
    }
    let payload: UsersDo = { ...user };

    return {
      user,
      tokenTime: S_tokenTime * 1000,
      refreshTokenTime: S_refreshTokenTime * 1000,
      token: jwt.sign(payload, this.getPrivateKey(), { algorithm: 'RS256', expiresIn: S_tokenTime }),
      refreshToken: jwt.sign(payload, this.getPrivateKey(), { algorithm: 'RS256', expiresIn: S_refreshTokenTime }),
    }
  }

  private static getPrivateKey(): Buffer {
    if (this.privateKey == null) {
      this.privateKey = fs.readFileSync(path.join(__dirname, '../../pem/private.pem'));
    }
    return this.privateKey;
  }

  private static getPublicKey(): Buffer {
    if (this.publicKey == null) {
      this.publicKey = fs.readFileSync(path.join(__dirname, '../../pem/public.pem'));
    }
    return this.publicKey;
  }

  /**
   * 解码
   * @param token 
   */
  static decode(token: string): Promise<any> {
    if (token == null) {
      return null;
    }
    let publicKey = this.getPublicKey()
    return new Promise(function (resolve, reject) {
      jwt.verify(token, publicKey, (err, decoded) => {
        if (err) {
          reject('JWT verification failed:' + err.message);
        } else {
          resolve(decoded);
        }
      });
    })
  }


}