import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatRoomService } from "./chatRoom.service";
import { ChatRoomGrpcControllerBase } from "./base/chatRoom.grpc.controller.base";

@swagger.ApiTags("chatRooms")
@common.Controller("chatRooms")
export class ChatRoomGrpcController extends ChatRoomGrpcControllerBase {
  constructor(protected readonly service: ChatRoomService) {
    super(service);
  }
}
