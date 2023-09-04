import { Line, Root, Header, InputForm, Input, Submit } from "./styles";
import useChatBot from "./hooks/useChatBot";
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