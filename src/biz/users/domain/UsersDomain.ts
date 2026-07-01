
import { BaseDomain, Server, Bean, Dao, JwtToken } from 'fastsaas'
import UsersDao from '../dao/UsersDao'
import UsersPojo from '../pojo/UsersPojo'
import UsersDo from '../pojo/UsersDo'
import Md5Util from '../../../util/Md5Util'
import Token from '../../../util/dto/Token'
import JwtUtil from '../../../util/JwtUtil'
import AreaDo from '../../area/pojo/AreaDo'
import SocketContext from '../../interceptor/SocketContext'


@Server()
export default class UsersDomain extends BaseDomain<UsersDo> {


  @Bean()
  private usersDao: UsersDao
  @Bean()
  private socketContext: SocketContext;
  getDao(): Dao<UsersDo> {
    return this.usersDao
  }

  async onEnterArea(user: UsersDo, area: AreaDo) {
    await this.usersDao.update({
      usersId: user.usersId,
      areaId: area.areaId
    })
  }


  private changePswd(user: UsersDo) {
    let copyUser = { ...user };
    copyUser.pswd = Md5Util.md5(`${copyUser.name}|${copyUser.pswd}`);
    return copyUser;
  }

  async login(user: UsersDo): Promise<UsersDo> {
    user = this.changePswd(user)
    user = await this.usersDao.findOne({ name: user.name, pswd: user.pswd })
    if (user == null) {
      throw new Error('用户不存在或密码错误');
    }
    return user;
  }

  async add(user: UsersDo): Promise<UsersDo> {
    user = this.changePswd(user)
    try {
      await this.usersDao.add(user)
    } catch (e) {
      throw new Error('用户已经存在');
    }
    return user;
  }

  async buildToken(user: UsersDo): Promise<Token> {
    return JwtUtil.buildRefreshTokens({
      usersId: user.usersId,
      name: user.name,
      role: user.role
    })
  }

}
