import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  chatRoom?: ChatRoomWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
};
