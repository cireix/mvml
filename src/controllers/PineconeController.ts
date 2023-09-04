import { PineconeClient } from '@pinecone-database/pinecone';

export class Pinecone {
    private pineconeClient = new PineconeClient();
    private index: ReturnType<PineconeClient["Index"]> | undefined;
    private apiKey: string | undefined;
    constructor(apiKey: string | undefined) {
        this.apiKey = apiKey;
    }

    public async init(apiKey: string | undefined) {
        if (!apiKey) throw new Error('Pinecone API Key not found');
        await this.pineconeClient.init({
            environment: 'northamerica-northeast1-gcp',
            apiKey: apiKey,
        });
        this.index = this.pineconeClient.Index('mvml');
    }

    public async insertVector(id: string, embedding: number[]) {
        if (!this.index) {
            await this.init(this.apiKey);
        }
        if (!this.index) throw new Error('Unexpected error: Pinecone Index not found');
        const res = await this.index.upsert({
            upsertRequest: {
                vectors: [
                    {
                        id: id,
                        values: embedding,
                    }
                ]
            }
        });
        return res;
    }
}

export const PineconeController = new Pinecone(process.env.PINECONE_API_KEY);