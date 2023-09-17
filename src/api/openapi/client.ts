import { Configuration, ProjectApi } from "./gen/v1.0";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

const baseConfig = new Configuration({
  basePath: API_BASE_URL,
  baseOptions: {
    headers: {
      version: "1",
    },
  },
});

export const projectApi = new ProjectApi(baseConfig);
