import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "..";
import { AuthSliceName } from "../auth/slice";
import { createProject, findProject, getProjects } from "./api";
import { ProjectStateStatus, ProjectSliceName } from "./slice";

const useProjectStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector<RootState, RootState[AuthSliceName.auth]>((state) => state.auth);
  const projectState = useSelector<RootState, RootState[ProjectSliceName.project]>((state) => state.project);
  const projectsState = useSelector<RootState, RootState[ProjectSliceName.projects]>((state) => state.projects);

  const isProjectError = useMemo(() => projectState.status === ProjectStateStatus.failed, [projectState.status]);
  const isProjectsError = useMemo(() => projectsState.status === ProjectStateStatus.failed, [projectsState.status]);

  const dispatchFindProject = useCallback(
    async (id: string) => {
      await dispatch(
        findProject({
          params: id,
          accessToken: authState.auth.accessToken,
        })
      );
    },
    [dispatch]
  );

  const dispatchGetProject = useCallback(async () => {
    await dispatch(getProjects());
  }, [dispatch]);

  const dispatchCreateProject = useCallback(
    async (params: { name: string; status: string }) => {
      await dispatch(
        createProject({
          params,
          accessToken: authState.auth.accessToken,
        })
      );
    },
    [dispatch]
  );

  const filterByStatus = useCallback(
    (status: string) => projectsState.projects.filter((project) => project.status === status),
    [projectsState.projects]
  );

  return {
    projectState,
    projectsState,
    isProjectError,
    isProjectsError,
    filterByStatus,
    dispatchFindProject,
    dispatchGetProject,
    dispatchCreateProject,
  };
};

export default useProjectStore;
