import UsersDo from "../../biz/users/pojo/UsersDo";
export default interface Token {
    user: UsersDo;
    tokenTime: number;
    refreshTokenTime: number;
    token: string;
    refreshToken: string;
}
