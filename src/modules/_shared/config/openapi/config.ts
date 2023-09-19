import { Configuration, ProjectApi } from "../../../../api/openapi/gen/v1.0";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type ConfigHeader = {
  accessToken: string;
  options?: Record<string, string>;
};

class APIConfiguration extends Configuration {
  constructor() {
    super({
      basePath: API_BASE_URL,
      baseOptions: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }

  setHeaders = (header: ConfigHeader) => {
    this.baseOptions.headers = {
      ...this.baseOptions.headers,
      ...header.options,
      Authorization: `Bearer ${header.accessToken}`,
    };
  };
}

export type APIParams<T> = {
  accessToken: string;
  params: T;
};

export class ProjectClient extends ProjectApi {
  constructor(header: ConfigHeader) {
    const config = new APIConfiguration();
    config.setHeaders(header);
    super(config);
  }
}
