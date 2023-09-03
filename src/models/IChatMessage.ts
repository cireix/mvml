type MessageType = "Jarvis" | "User"
export interface IChatMessage {
    type: MessageType;
    text: string;
}