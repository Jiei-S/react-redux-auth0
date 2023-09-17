import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "..";
import { createProject, findProject, getProjects } from "./api";
import { ProjectStateStatus, ProjectSliceName } from "./slice";

const useProjectStore = () => {
  const dispatch = useDispatch<AppDispatch>();

  const projectState = useSelector<RootState, RootState[ProjectSliceName.project]>((state) => state.project);
  const isProjectLoading = useMemo(() => projectState.status === ProjectStateStatus.loading, [projectState.status]);
  const isProjectError = useMemo(() => projectState.status === ProjectStateStatus.failed, [projectState.status]);

  const projectsState = useSelector<RootState, RootState[ProjectSliceName.projects]>((state) => state.projects);
  const isProjectsLoading = useMemo(() => projectsState.status === ProjectStateStatus.loading, [projectsState.status]);
  const isProjectsError = useMemo(() => projectsState.status === ProjectStateStatus.failed, [projectsState.status]);

  const dispatchFindProject = useCallback(
    async (id: string) => {
      await dispatch(findProject(id));
    },
    [dispatch]
  );

  const dispatchGetProject = useCallback(async () => {
    await dispatch(getProjects());
  }, [dispatch]);

  const dispatchCreateProject = useCallback(
    async (params: { name: string; status: string }) => {
      await dispatch(createProject(params));
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
    isProjectLoading,
    isProjectError,
    isProjectsLoading,
    isProjectsError,
    filterByStatus,
    dispatchFindProject,
    dispatchGetProject,
    dispatchCreateProject,
  };
};

export default useProjectStore;
