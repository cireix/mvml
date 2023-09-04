import { IChatMessage } from "@/models";
import { Bubble, Jarvis, Root, User } from "./styles";

interface MessageProps {
    chatMessage: IChatMessage
}

const Message = (props: MessageProps) => {
    const { chatMessage } = props;
    return (
        <Root isjarvis={chatMessage.type === 'Jarvis'}>
            {chatMessage.type === 'Jarvis' ? <Jarvis /> : <User />}
            <Bubble className="chat">{chatMessage.text}</Bubble>
        </Root>
    )
}

export default Message;
