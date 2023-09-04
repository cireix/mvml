import { useEffect, useRef, useState } from "react";
import { HuggingFaceController } from "@/controllers";
import { IChatMessage } from "@/models";

// Get the types for SimpleBarCore
import SimpleBarCore from 'simplebar-core';

const useChatBot = () => {
    const [history, setHistory] = useState<IChatMessage[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const historyRef = useRef<SimpleBarCore>(null);

    const scrollToBottom = () => {
        if (historyRef.current) {
            const scrollContainer = historyRef.current.contentEl;
            if (scrollContainer) {
                scrollContainer.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            }
        }
    }

    useEffect(scrollToBottom, [history]);


    const submitForm = async (form: HTMLFormElement) => {
        if (submitting) return;
        // Prevent blank submissions
        const queryField = form.query.value;
        if (!queryField) return;
        if(navigator.userAgent.indexOf('iPhone') > -1 ) {
            // @ts-ignore
            document.activeElement!.blur();
        }

        setSubmitting(true);
        const query: IChatMessage = {
            type: "User",
            text: queryField,
        }
        setHistory(state => [...state, query])
        form.reset();
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
        historyRef,
    }
}

export default useChatBot;
