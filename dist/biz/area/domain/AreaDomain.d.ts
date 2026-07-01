import { BaseDomain, Dao } from 'fastsaas';
import AreaDo from '../pojo/AreaDo';
import UsersDo from '../../users/pojo/UsersDo';
export default class AreaDomain extends BaseDomain<AreaDo> {
    events: {
        /**
         * 告诉其他人user来了
         */
        enter: string;
        /**
         * 告诉其他人user走了
         */
        leave: string;
        /**
         * 告诉user区域变了
         */
        change: string;
    };
    private areaDao;
    private roadDomain;
    private usersDomain;
    private socketContext;
    private usersSearcher;
    enter(user: UsersDo, area: AreaDo): Promise<void>;
    leave(user: UsersDo): Promise<void>;
    private buildRoomId;
    couldEnter(user: UsersDo, area: AreaDo): Promise<boolean>;
    getDao(): Dao<AreaDo>;
}
