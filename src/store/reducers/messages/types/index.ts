export type IMessages = {
  id: string;
  senderId: string;
  message: string;
  isRead: boolean;
  isReceived: boolean;
  createdAt: Date;
}

export type IChat = {
  idChat: string;
  usernameFriend: string;
  avatarFriend: string;
  messages: IMessages[];
  notRead: number;
  isOnline: boolean;
};
