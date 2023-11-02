import { Channel, ChannelType, Server } from "@prisma/client"; //prismaのschemaをimport
import { create } from "zustand";

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer"
  | "deleteChannel"
  | "editChannel"
  | "messageFile"
  | "deleteMessage";

interface ModalData {
  server?: Server;
  channel?: Channel;
  channelType?: ChannelType;
  apiUrl?: string;
  query?: Record<string, any>;
}

// ModalStoreという型を作成
interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

// zustandのcreateを使って、useModalというカスタムフックを作成
export const useModal = create<ModalStore>((set) => ({
  // デフォルトstateの設定
  type: null,
  data: {},
  isOpen: false,
  // アクションの設定。setを使ってstateを更新する関数
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
