import axios, { AxiosRequestConfig, Method } from 'axios';

export type APICALL = {
    method: Method;
    url: string;
    data?: any;
    headers?: { [key: string]: string };
    others?: AxiosRequestConfig;
};

export const api = async (context: APICALL) => {
    const { method, url, data, headers, others } = context;

    const config: AxiosRequestConfig = {
        method,
        url,
        headers,
        data,
        ...others,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API call error:', error.response?.data);
            throw error.response?.data;
        } else {
            console.error('Unexpected error:', error);
            throw error;
        }
    }
};
