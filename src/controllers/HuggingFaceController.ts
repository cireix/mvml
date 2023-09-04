import { AxiosController } from "@/controllers";
import { Dict, IHF_EmbeddingResponse, IHF_GPTResponse } from "@/models";

class HuggingFace extends AxiosController{
    private modelURL: string = 'https://api-inference.huggingface.co/models/gpt2';
    private embeddingURL: string = 'https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2';
    // private auth: string = `Bearer ${process.env.HUGGINGFACE_API_KEY}`
    private auth: string = 'Bearer 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';
    private axiosHeader: Dict<string> = {
        'Authorization': this.auth,
    }

    // Parses the response from queryModel
    // Returns the generated text without the input text
    // and stops the sentence at the last end punctuation
    private parseModelResponse(text: string, response: IHF_GPTResponse[]): string {
        if (response.length === 0) {
            // Log error here;
            throw new Error('No response from HuggingFace');
        }
        const generatedText = response[0].generated_text;
        const toRemove = `${text}`;
        let parsedText = generatedText.replace(toRemove, '');

        const lastPeriod = parsedText.lastIndexOf('.');
        const lastQuestion = parsedText.lastIndexOf('?');
        const lastExclamation = parsedText.lastIndexOf('!');
        parsedText = parsedText.slice(0, Math.max(lastPeriod, lastQuestion, lastExclamation) + 1);
        return parsedText;
    }

    // Transforms the input text to contain a punction at the end
    // GPT2 Model provides better results when the input text ends in a punctuation
    private transformQuery(text: string): string {
        let query = text;
        const wordList = ['who', 'what', 'when', 'where', 'why', 'how', 'is'];
        if (!query.endsWith('.') && !query.endsWith('?') && !query.endsWith('!')) {
            for (const word of wordList) {
                if (query.toLowerCase().startsWith(word)) {
                    query += '?';
                    return query;
                }
            }
            query += '.';
        }
        return query;
    }

    private async queryModel(text: string) {
        const query = this.transformQuery(text.trim());
        console.log(query);
        const response = await this.axiosPOST<IHF_GPTResponse[]>(
            this.modelURL, {
                inputs: query,
                parameters: {
                    max_length: 60,
                    no_repeat_ngram_size: 3,
                    return_full_text: true,
                },
            },
            this.axiosHeader
        );
        return this.parseModelResponse(query, response);
    }

    private async embedding(text: string) {
        const response = await this.axiosPOST<IHF_EmbeddingResponse>(
            this.embeddingURL, {
                inputs: text,
                options: {
                    wait_for_model: true,
                },
            },
            this.axiosHeader
        );

        return response;
        
    }
    public async chat(text: string): Promise<string> {
        const embedding = await this.embedding(text);
        console.log(embedding);
        const response = await this.queryModel(text);
        return response;
    }
    
}

export const HuggingFaceController = new HuggingFace();
