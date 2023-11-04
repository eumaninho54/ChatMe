import { IUser } from "../../user/types";

export type ISender = {
  id: string;
  name: string;
  avatar: string;
}

export type IMessages = {
  id: string;
  sender: ISender;
  message: string;
  isReadBy: string[];
  isReceivedBy: string[];
  createdAt: Date;
};

export type IChat = {
  idChat: string;
  users: Omit<IUser, 'auth' | 'accessToken' | 'refreshToken'>[];
  name: string;
  icon?: string;
  messages: IMessages[];
  notRead: number;
  isGroup: boolean;
  isOnline: boolean;
};
