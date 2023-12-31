import Message from "./components/Message/Message";
import useChatBot from "./hooks/useChatBot";
import { ChatHistory, Header, Input, InputForm, Line, Root, Submit } from "./styles";

import 'simplebar-react/dist/simplebar.min.css';
const Chatbox = () => {
    const {
        history,
        submitting,
        handleSubmit,
        handleEnter,
        historyRef,
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
                ref={historyRef}
            >
                {history.map((chatMessage, index) => (
                    <Message chatMessage={chatMessage} key={index} />
                ))}
                {submitting && <p>Jarvis is typing...</p>}
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