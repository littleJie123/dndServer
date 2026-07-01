import { Searcher } from 'fastsaas';
import AreaDo from '../pojo/AreaDo';
export default class AreaSearcher extends Searcher<AreaDo> {
    findCoor(arg0: {
        x: number;
        y: number;
        z: number;
    }): Promise<AreaDo[]>;
    protected init(): void;
    protected getIsDel(): boolean;
    protected getKey(): string;
}
