import axios, { AxiosResponse } from 'axios';
import { Dict } from '@/models';

// interface AxiosRes<T extends ResponseSchema> extends AxiosResponse<T> {}

export abstract class AxiosController {
    protected async axiosGET<T>(
        path: string, params: Dict<any>, headers?: Dict<any>,
    ) : Promise<T> {
        const axiosResp : AxiosResponse<T> = await axios.get(path, {
            params: params,
            headers: headers,
        }).catch((error) => {
            // Log error here
            throw error;
        });

        const respData : T = this.loadAxiosRes(axiosResp);
        return respData;
    }

    protected async axiosPOST<T>(
        path: string, body: Dict<any>, headers?: Dict<any>,
    ) : Promise<T> {
        const axiosResp : AxiosResponse<T> = await axios.post(
            path, body, { headers: headers }
        ).catch((error) => {
            // Log error here
            throw error;
        });

        const respData : T = this.loadAxiosRes(axiosResp);
        return respData;
    }

    protected async axiosPUT<T>(
        path: string, body: Dict<any>, headers?: Dict<any>,
    ) : Promise<T> {
        const axiosResp : AxiosResponse<T> = await axios.put(
            path, body, { headers: headers }
        ).catch((error) => {
            // Log error here
            throw error;
        });

        const respData : T = this.loadAxiosRes(axiosResp);
        return respData;
    }

    protected async axiosDELETE<T>(
        path: string, params: Dict<any>, headers?: Dict<any>,
    ) : Promise<T> {
        const axiosRes : AxiosResponse<T> = await axios.delete(path, {
            params: params,
            headers: headers,
        }).catch((error) => {
            // Log error here
            throw error;
        });

        const resData : T = this.loadAxiosRes(axiosRes);
        return resData;
    }

    private loadAxiosRes<T>(axiosRes: AxiosResponse<T>) : T {
        const respData : T = axiosRes.data;
        // Load any response transformer here

        return respData;
    }

}
