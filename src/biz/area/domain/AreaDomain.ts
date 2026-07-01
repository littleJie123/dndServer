
import { BaseDomain, Server, Bean, Dao } from 'fastsaas'
import AreaDao from '../dao/AreaDao'
import AreaPojo from '../pojo/AreaPojo'
import AreaDo from '../pojo/AreaDo'
import UsersDo from '../../users/pojo/UsersDo'
import SocketContext from '../../interceptor/SocketContext'
import RoadDomain from '../../road/domain/RoadDomain'
import UsersDomain from '../../users/domain/UsersDomain'
import UsersSearcher from '../../users/searcher/UsersSearcher'
@Server()
export default class AreaDomain extends BaseDomain<AreaDo> {

  events = {
    /**
     * 告诉其他人user来了
     */
    enter: 'Area.Room.enter',
    /**
     * 告诉其他人user走了
     */
    leave: 'Area.Room.leave',

    /**
     * 告诉user区域变了
     */
    change: 'Area.User.change'
  }


  @Bean()
  private areaDao: AreaDao
  @Bean()
  private roadDomain: RoadDomain;

  @Bean()
  private usersDomain: UsersDomain;

  @Bean()
  private socketContext: SocketContext;
  @Bean()
  private usersSearcher: UsersSearcher;
  async enter(user: UsersDo, area: AreaDo) {

    await this.usersDomain.onEnterArea(user, area);
    this.socketContext.emitRoom(this.buildRoomId(area.areaId), this.events.enter, user);
    this.socketContext.joinRoom(this.buildRoomId(area.areaId));
    this.socketContext.sendEvent(this.events.change, area);

  }

  async leave(user: UsersDo) {
    let login = this.socketContext;
    login.emitRoom(this.buildRoomId(user.areaId), this.events.leave, user);
  }

  private buildRoomId(areaId: number) {
    return 'Area.' + areaId
  }

  async couldEnter(user: UsersDo, area: AreaDo) {
    if (user.areaId == 0 || user.areaId == area.areaId) {
      return true;
    }
    return this.roadDomain.hasRoad(user.areaId, area.areaId);
  }
  getDao(): Dao<AreaDo> {
    return this.areaDao
  }
}

