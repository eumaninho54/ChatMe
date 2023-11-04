import { IUser } from '../../../store/reducers/user/types';
import { IMessages } from './../../../store/reducers/messages/types/index';

export type IProps = {
  message: IMessages
  users: Omit<IUser, "auth" | "accessToken" | "refreshToken">[]
}
