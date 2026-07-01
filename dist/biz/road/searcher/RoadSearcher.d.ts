import { Searcher } from 'fastsaas';
import RoadPojo from '../pojo/RoadPojo';
export default class RoadSearcher extends Searcher<RoadPojo> {
    protected init(): void;
    protected getIsDel(): boolean;
    protected getKey(): string;
}
