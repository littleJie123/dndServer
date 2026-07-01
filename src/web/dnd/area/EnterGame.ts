import { Bean, Control } from "fastsaas";
import AreaDomain from "../../../biz/area/domain/AreaDomain";
import AreaDo from "../../../biz/area/pojo/AreaDo";
import AreaSearcher from "../../../biz/area/searcher/AreaSearcher";
import UsersSearcher from "../../../biz/users/searcher/UsersSearcher";
import SocketContext from "../../../biz/interceptor/SocketContext";
import UsersDo from "../../../biz/users/pojo/UsersDo";

export default class extends Control {
  @Bean()
  private areaDomain: AreaDomain;
  @Bean()
  private areaSearcher: AreaSearcher
  @Bean()
  private usersSearcher: UsersSearcher;
  @Bean()
  private socketContext: SocketContext
  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    let users = this.socketContext.getUser();
    users = await this.usersSearcher.getById(users.usersId, ['usersId', 'areaId', 'name'])

    await this.areaDomain.enter(users, await this.getArea(users));
  }
  async getArea(user: UsersDo): Promise<AreaDo> {
    if (user.areaId != 0) {
      return this.areaSearcher.getById(user.areaId);
    } else {
      let list = await this.areaSearcher.findCoor({
        x: 0,
        y: 0,
        z: 0
      })
      return list[0]
    }
  }
}