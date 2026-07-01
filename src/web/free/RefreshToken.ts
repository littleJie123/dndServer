import { Bean, Control, JwtToken } from "fastsaas";
import JwtUtil from "../../util/JwtUtil";
import UsersDomain from "../../biz/users/domain/UsersDomain";
import UsersDao from "../../biz/users/dao/UsersDao";

interface RefreshTokenOpt {
  refreshToken: string;
}
export default class extends Control<RefreshTokenOpt> {
  @Bean()
  private usersDao: UsersDao;
  @Bean()
  private usersDomain: UsersDomain;
  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    let payload = await JwtUtil.decode(this._param.refreshToken);
    let usersPojo = await this.usersDao.getById(payload.usersId);
    if (usersPojo == null || usersPojo.isDel == 1) {
      return null;
    }
    return this.usersDomain.buildToken(usersPojo);
  }
}