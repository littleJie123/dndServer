
import { Column } from 'fastsaas'
import UsersDo from './UsersDo';
class UsersPojo implements UsersDo{
  @Column({name:'users_id'})
  usersId:number;

  @Column({name:'name'})
  name:string;

  @Column({name:'context_id'})
  contextId:string;

  @Column({name:'sys_add_time'})
  sysAddTime:Date;

  @Column({name:'sys_modify_time'})
  sysModifyTime:Date;

  @Column({name:'is_del'})
  isDel:number;

  @Column({name:'pswd'})
  pswd:string;

  @Column({name:'role'})
  role:string;

  @Column({name:'area_id'})
  areaId:number

}
export default UsersPojo;
