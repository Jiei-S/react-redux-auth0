import { ProjectApi } from "./v1.0/clients/project-api";
import { Configuration } from "./v1.0/configuration";

const API_BASE_URL = import.meta.env.VITE_API_BASE_PATH;

const baseConfig = new Configuration({
  basePath: API_BASE_URL,
  baseOptions: {
    headers: {
      workspaceId: "1",
    },
  },
});

export const projectApi = new ProjectApi(baseConfig);
