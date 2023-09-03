import { AxiosController } from "@/controllers";
import { Dict, IHF_GPTResponse } from "@/models";

class HuggingFace extends AxiosController{
    private modelURL: string = 'https://api-inference.huggingface.co/models/gpt2';
    private embeddingURL: string = 'https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2';
    // private auth: string = `Bearer ${process.env.HUGGINGFACE_API_KEY}`
    private auth: string = 'Bearer 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';
    private axiosHeader: Dict<string> = {
        'Authorization': this.auth,
    }
    private parseModelResponse(text: string, response: IHF_GPTResponse[]): string {
        if (response.length === 0) {
            // Log error here;
            throw new Error('No response from HuggingFace');
        }
        const generatedText = response[0].generated_text;
        const toRemove = `${text}\n\n`;
        let parsedText = generatedText.replace(toRemove, '');
        const lastPeriod = parsedText.lastIndexOf('.');
        parsedText = parsedText.slice(0, lastPeriod + 1);
        return parsedText;

    }
    public async queryModel(text: string) {
        const response = await this.axiosPOST<IHF_GPTResponse[]>(
            this.modelURL, {
                inputs: text,
                parameters: {
                    max_length: 60,
                    no_repeat_ngram_size: 3,
                },
            },
            this.axiosHeader
        );
        return this.parseModelResponse(text, response);
    }

    // async function embedding(data: any) {
    //   const model_id = 'sentence-transformers/all-mpnet-base-v2'
    //   const response = await fetch(
    //     `https://api-inference.huggingface.co/pipeline/feature-extraction/${model_id}`,
    //     {
    //       headers: { Authorization: 'Bearer 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' },
    //       method: 'POST',
    //       body: JSON.stringify({"inputs": data, "options":{"wait_for_model": true}}),
    //     }
    //   );
    //   const result = await response.json();
    //   return result;
    // }
    // public async chat(text: string): Promise<string> {
    //     console.log(123);
    //     const response = await this.queryModel(text);
    //     return response;
    // }
    
}

export const HuggingFaceController = new HuggingFace();
