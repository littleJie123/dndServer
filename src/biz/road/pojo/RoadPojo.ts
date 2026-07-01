
import { Column } from 'fastsaas'
import RoadDo from './RoadDo';
class RoadPojo implements RoadDo{
  @Column({name:'road_id'})
  roadId:number;

  @Column({name:'name'})
  name:string;

  @Column({name:'area_id'})
  areaId:number;

  @Column({name:'target_id'})
  targetId:number;

  @Column({name:'context_id'})
  contextId:string;

  @Column({name:'sys_add_time'})
  sysAddTime:Date;

  @Column({name:'sys_modify_time'})
  sysModifyTime:Date;

  @Column({name:'is_del'})
  isDel:number

}
export default RoadPojo;
