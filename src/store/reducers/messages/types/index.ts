import { IUser } from "../../user/types";

export type IMessages = {
  id: string;
  senderId: string;
  message: string;
  isReadBy: string[];
  isReceivedBy: string[];
  createdAt: Date;
}

export type IChat = {
  idChat: string;
  users: IUser[]
  name?: string;
  icon?: string;
  messages: IMessages[];
  notRead: number;
  isGroup: boolean
  isOnline: boolean;
};
