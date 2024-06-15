import * as ChatType from "../../constants/ChatType";
import { ChatTexts } from "../ChatTexts";
import { PetImages } from "../PetImages";
import { WalkCosts } from "../WalkCosts";

export const ChatConvos = (props) => {
  return (
    <>
      {props.type === ChatType.TEXT && (
        <ChatTexts source={props.source} content={props.content} />
      )}
      {props.type === ChatType.IMAGE && (
        <PetImages source={props.source} content={props.content} />
      )}
      {props.type === ChatType.COST && (
        <WalkCosts source={props.source} content={props.content} />
      )}
    </>
  );
};
