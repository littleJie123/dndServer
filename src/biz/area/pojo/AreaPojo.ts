
import { Column } from 'fastsaas'
import AreaDo from './AreaDo';
class AreaPojo implements AreaDo{
  @Column({name:'area_id'})
  areaId:number;

  @Column({name:'x'})
  x:number;

  @Column({name:'y'})
  y:number;

  @Column({name:'z'})
  z:number;

  @Column({name:'name'})
  name:string;

  @Column({name:'remark'})
  remark:string;

  @Column({name:'is_del'})
  isDel:number;

  @Column({name:'context_id'})
  contextId:string;

  @Column({name:'sys_add_time'})
  sysAddTime:Date;

  @Column({name:'sys_modify_time'})
  sysModifyTime:Date

}
export default AreaPojo;
