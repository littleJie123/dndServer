import RoadDo from "../../road/pojo/RoadDo";


interface AreaDo {
  areaId?: number;

  x?: number;

  y?: number;

  z?: number;

  name?: string;

  remark?: string;

  isDel?: number;

  contextId?: string;

  sysAddTime?: Date;

  sysModifyTime?: Date;

  ///////////////////////////////////
  roads?: RoadDo[];
}
export default AreaDo;
