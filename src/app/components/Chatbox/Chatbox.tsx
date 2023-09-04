import { Line, Root, Header, InputForm, Input, Submit, ChatHistory } from "./styles";
import useChatBot from "./hooks/useChatBot";
import 'simplebar-react/dist/simplebar.min.css';
import Message from "./components/Message/Message";
const Chatbox = () => {
    const {
        history,
        submitting,
        handleSubmit,
        handleEnter,
    } = useChatBot();
    return(
        <Root>
            <Header>
                <h1>Customer Support</h1>
                <Line />
            </Header>
            <ChatHistory
                forceVisible="y"
                autoHide={false}
            >
                {history.map((chatMessage, index) => (
                    <Message chatMessage={chatMessage} key={index} />
                ))}
            </ChatHistory>
            <InputForm onSubmit={handleSubmit}>
                <Input onKeyPress={handleEnter} name="query"/>
                <Submit disabled={submitting}>
                    Submit
                </Submit>
            </InputForm>
        </Root>
    )
}

export default Chatbox;