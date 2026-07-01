import { BaseDomain, Dao } from 'fastsaas';
import UsersDo from '../pojo/UsersDo';
import Token from '../../../util/dto/Token';
import AreaDo from '../../area/pojo/AreaDo';
export default class UsersDomain extends BaseDomain<UsersDo> {
    private usersDao;
    private socketContext;
    getDao(): Dao<UsersDo>;
    onEnterArea(user: UsersDo, area: AreaDo): Promise<void>;
    private changePswd;
    login(user: UsersDo): Promise<UsersDo>;
    add(user: UsersDo): Promise<UsersDo>;
    buildToken(user: UsersDo): Promise<Token>;
}
