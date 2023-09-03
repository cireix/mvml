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

    public async queryModel(text: string) {
        const response = await this.axiosPOST<IHF_GPTResponse[]>(
            this.modelURL, {
                inputs: text,
            },
            this.axiosHeader
        );
        return response;
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
