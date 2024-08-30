import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
};
