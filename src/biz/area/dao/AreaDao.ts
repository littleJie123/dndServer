
import { MySqlDao ,Server,ContextId,SysTime} from 'fastsaas';
import AreaPojo from '../pojo/AreaPojo'
import AreaDo from '../pojo/AreaDo';
@ContextId()
@SysTime()
@Server()
export default class AreaDao extends MySqlDao<AreaDo>{
  constructor() {
    super({
      ids: ['area_id'],
      tableName: 'area',
      Pojo:AreaPojo,
      poolName:'mysql'
    })
  }
}
