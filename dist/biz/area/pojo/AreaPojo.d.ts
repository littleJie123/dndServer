import AreaDo from './AreaDo';
declare class AreaPojo implements AreaDo {
    areaId: number;
    x: number;
    y: number;
    z: number;
    name: string;
    remark: string;
    isDel: number;
    contextId: string;
    sysAddTime: Date;
    sysModifyTime: Date;
}
export default AreaPojo;
