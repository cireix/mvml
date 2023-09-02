class HuggingFace {
    private modelURL: string = 'https://api-inference.huggingface.co/models/gpt2';
    private embeddingURL: string = 'https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2';
    // private auth: string = `Bearer ${process.env.HUGGINGFACE_API_KEY}`
    private auth: string = 'Bearer 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';

    constructor() {}
    private async queryModel(text: string | string[]) {
        const response = await fetch(this.modelURL, {
            method: 'POST',
            headers: {
                'Authorization': this.auth,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: text
            })
        });
        return response.json();
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
    public async chat(text: string | string[]): Promise<string> {
        console.log(123);
        const response = await this.queryModel(text);
        return response;
    }
    
}

const HuggingFaceController = new HuggingFace();
export default HuggingFaceController;