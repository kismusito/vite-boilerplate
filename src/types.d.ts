export type ErrorMessage = {
  message: string;
  status: number;
};

export type InputTextProps = {
  changeAction: (value: string) => void;
};

export type HttpMethods = 'get' | 'post';

export type ApiNames = 'alegra' | 'unsplash';

export type ConfigQuery = {
  base: string;
  headers?: {
    [key: string]: string;
  };
  params?: {
    [key: string]: string;
  };
};

export type BaseQueryProps = {
  api: ApiNames;
  httpMethod: HttpMethods;
  url: string;
  params?: {
    [key: string]: string | number;
  };
  body?: {
    [key: string]: string | number | {};
  };
};

export type ImageProps = {
  url: string;
};
