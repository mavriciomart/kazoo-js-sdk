import jwt from "jsonwebtoken";

interface ParsedResponse {
  status: number;
  ok: boolean;
  json: any;
}

export const parseResponse = (response: Response) => {
  return new Promise<ParsedResponse>((resolve) => {
    response.text().then((body) => {
      resolve({
        status: response.status,
        ok: response.ok,
        json: body !== "" ? JSON.parse(body) : "{}",
      });
    });
  });
};

export const isTokenInvalid = (token: string) => {
  try {
    const { exp: expiration = null } = jwt.decode(token);
    const currentTimestamp = Math.ceil(new Date().getTime() / 1000);
    const expirationBuffer = 10;
    const expirationTimestamp = expiration - expirationBuffer;

    if (currentTimestamp >= expirationTimestamp) {
      return true;
    }

    return false;
  } catch (_) {
    return true;
  }
};
