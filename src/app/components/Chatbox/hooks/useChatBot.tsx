import { useState } from "react";
import { HuggingFaceController } from "@/controllers";
import { IChatMessage } from "@/models";

const useChatBot = () => {
    const [history, setHistory] = useState<IChatMessage[]>([]);
    const [submitting, setSubmitting] = useState(false);


    const submitForm = async (form: HTMLFormElement) => {
        if (submitting) return;
        setSubmitting(true);
        const query: IChatMessage = {
            type: "User",
            text: form.query.value,
        }
        setHistory(state => [...state, query])
        try {
            const generatedText = await HuggingFaceController.queryModel(query.text);
            const res: IChatMessage = {
                type: "Jarvis",
                text: generatedText,
            }
            setHistory(state => [...state, res]);
        } catch (err) {
            // Log error
            console.error(err);
        }
        setSubmitting(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm(e.currentTarget)
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            submitForm(e.currentTarget.parentElement as HTMLFormElement);
        }
    }

    return {
        history,
        submitting,
        handleSubmit,
        handleEnter,
    }
}

export default useChatBot;
