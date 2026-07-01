import RoadDo from './RoadDo';
declare class RoadPojo implements RoadDo {
    roadId: number;
    name: string;
    areaId: number;
    targetId: number;
    contextId: string;
    sysAddTime: Date;
    sysModifyTime: Date;
    isDel: number;
}
export default RoadPojo;
