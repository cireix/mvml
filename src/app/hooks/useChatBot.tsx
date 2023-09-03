import { useState } from "react";
import { HuggingFaceController } from "@/controllers";
import { IChatMessage } from "@/models";

const useChatBot = () => {
    const [history, setHistory] = useState<IChatMessage[]>([]);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);

        const query: IChatMessage = {
            type: "User",
            text: e.currentTarget.query.value,
        }
        setHistory(state => [...state, query])
        const generatedText = await HuggingFaceController.queryModel(query.text);
        const res: IChatMessage = {
            type: "Jarvis",
            text: generatedText,
        }
        setHistory(state => [...state, res]);
        setSubmitting(false);
    };

    return {
        history,
        submitting,
        handleSubmit,
    }
}

export default useChatBot;
