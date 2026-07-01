
import { BaseDomain, Server, Bean, Dao } from 'fastsaas'
import RoadDao from '../dao/RoadDao'
import RoadPojo from '../pojo/RoadPojo'
import RoadDo from '../pojo/RoadDo'
@Server()
export default class RoadDomain extends BaseDomain<RoadDo> {

  @Bean()
  private roadDao: RoadDao

  getDao(): Dao<RoadDo> {
    return this.roadDao
  }

  async hasRoad(areaId: number, targetId: number): Promise<boolean> {
    let road = await this.roadDao.findOne({
      areaId,
      targetId,
      isDel: 0
    })
    return road != null;
  }
}
