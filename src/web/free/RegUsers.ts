import { Bean, Control } from "fastsaas";
import UsersDao from "../../biz/users/dao/UsersDao";
import UsersDomain from "../../biz/users/domain/UsersDomain";
import DndSocket from "../../server/DndSocket";

export default class extends Control {
  @Bean()
  private usersDao: UsersDao;
  @Bean()
  private usersDomain: UsersDomain;

  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    
    let socket = this.socketProcessor as DndSocket;

    let userCnt = await this.usersDao.findCnt({ name: this._param.name })
    if (userCnt > 0) {
      throw new Error('该用户名已经存在。');
    } else {
      let user = await this.usersDomain.add(this._param)
      socket.setUser(user);
      return {
        userId:user.usersId,
        name:user.name
      };
    }
  }
}