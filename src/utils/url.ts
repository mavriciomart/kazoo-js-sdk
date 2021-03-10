import { URLParams } from "./../types/request";

const formatQueryString = (key: string, value: string) => {
  return `${key}=${value}`;
};

const buildUrlQueryParams = ({ paginate }: URLParams) => {
  let params = {};

  if (paginate) {
    params = { ...params, paginate };
  }

  return Object.keys(params)
    .map((key) => formatQueryString(key, params[key]))
    .join("&");
};

export const buildRequestUrl = (endpoint: string, params: URLParams) => {
  if (params.paginate) {
    const urlParamsString = buildUrlQueryParams(params);
    return `${endpoint}?${urlParamsString}`;
  }

  return endpoint;
};
