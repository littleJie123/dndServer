
import { MySqlDao ,Server,ContextId,SysTime} from 'fastsaas';
import UsersPojo from '../pojo/UsersPojo'
import UsersDo from '../pojo/UsersDo';
@ContextId()
@SysTime()
@Server()
export default class UsersDao extends MySqlDao<UsersDo>{
  constructor() {
    super({
      ids: ['users_id'],
      tableName: 'users',
      Pojo:UsersPojo,
      poolName:'mysql'
    })
  }
}
