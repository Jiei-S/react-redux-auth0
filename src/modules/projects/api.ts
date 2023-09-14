import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectCreateParams } from "../../../../boilerplate-clean-architecture-node/api/v1.0/models/project-create-params";
import { ProjectResponse } from "../../../../boilerplate-clean-architecture-node/api/v1.0/models";
import { projectApi } from "../../api/openapi/client";

export const findProject = createAsyncThunk<ProjectResponse, string>(
  "projects/findProject",
  async (id) => {
    return {
      ...(
        await projectApi.findProject({
          id,
        })
      ).data,
    };
  }
);

export const createProject = createAsyncThunk<
  ProjectResponse,
  ProjectCreateParams
>("projects/createProject", async (projectCreateParams) => {
  return {
    ...(await projectApi.createProject({ projectCreateParams })).data,
  };
});
