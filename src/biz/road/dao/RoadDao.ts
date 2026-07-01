
import { MySqlDao ,Server,ContextId,SysTime} from 'fastsaas';
import RoadPojo from '../pojo/RoadPojo'
import RoadDo from '../pojo/RoadDo';
@ContextId()
@SysTime()
@Server()
export default class RoadDao extends MySqlDao<RoadDo>{
  constructor() {
    super({
      ids: ['road_id'],
      tableName: 'road',
      Pojo:RoadPojo,
      poolName:'mysql'
    })
  }
}
