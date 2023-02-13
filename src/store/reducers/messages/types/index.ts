export type IMessages = {
  idChat: string;
  usernameFriend: string;
  avatarFriend: string;
  messages: {
    id: string;
    senderId: string;
    message: string;
    isRead: boolean;
    isReceived: boolean;
    createdAt: Date;
  }[];
  notRead: number;
};
