import { useEffect } from "react";
import { redirect, useParams } from "react-router-dom";
import useProjectStore from "../../modules/projects/hook";
import Loading from "../_shared/components/loading/primary";

const ProjectDetail = (): JSX.Element => {
  const { projectId } = useParams<{ projectId: string }>();
  const { dispatchFindProject, projectState, isProjectLoading: isLoading, isProjectError: isError } = useProjectStore();

  useEffect(() => {
    if (!projectId) {
      redirect("/");
      return;
    }
    (async () => {
      await dispatchFindProject(projectId);
    })();
  }, [dispatchFindProject, projectId]);

  return (
    <>{isLoading ? <Loading /> : isError ? <div>Something went wrong</div> : <div>{projectState.project.name}</div>}</>
  );
};

export default ProjectDetail;
