import { BaseDomain, Dao } from 'fastsaas';
import RoadDo from '../pojo/RoadDo';
export default class RoadDomain extends BaseDomain<RoadDo> {
    private roadDao;
    getDao(): Dao<RoadDo>;
    hasRoad(areaId: number, targetId: number): Promise<boolean>;
}
