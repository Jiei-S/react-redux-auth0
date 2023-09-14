import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "..";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { createProject, findProject } from "./api";
import { ProjectStateStatus, PROJECT_SLICE_KEY } from "./slice";

const useProjectStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projectState = useSelector<
    RootState,
    RootState[typeof PROJECT_SLICE_KEY]
  >((state) => state.projects);

  const { project, status } = projectState;
  const isLoading = useMemo(
    () => status === ProjectStateStatus.loading,
    [status]
  );

  const isError = useMemo(() => status === ProjectStateStatus.failed, [status]);

  const dispatchFindProject = useCallback(
    async (id: string) => {
      await dispatch(findProject(id));
    },
    [dispatch]
  );

  const dispatchCreateProject = useCallback(
    async (params: { name: string; status: string }) => {
      await dispatch(createProject(params));
    },
    [dispatch]
  );

  return {
    project,
    isLoading,
    isError,
    dispatchFindProject,
    dispatchCreateProject,
  };
};

export default useProjectStore;
