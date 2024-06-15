import { ChatActions } from "../ChatActions/ChatActions";
import { ChatConvos } from "../ChatConvos";
import { chats } from "./data";

export const PhoneBody = () => {
  const chatList = chats.map((item) => {
    return (
      <ChatConvos
        type={item.type}
        source={item.source}
        content={item.content}
      />
    );
  });
  return (
    <>
      {chatList}
      <ChatActions />
    </>
  );
};
