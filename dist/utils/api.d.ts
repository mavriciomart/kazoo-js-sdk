interface ParsedResponse {
    status: number;
    ok: boolean;
    json: any;
}
export declare const parseResponse: (response: Response) => Promise<ParsedResponse>;
export declare const isTokenInvalid: (token: string) => boolean;
export {};
