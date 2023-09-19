import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProjectStore from "../../modules/projects/hook";

const ProjectDetail = (): JSX.Element => {
  const { projectId } = useParams<{ projectId: string }>();
  const { dispatchFindProject, projectState, isProjectError: isError } = useProjectStore();

  useEffect(() => {
    (async () => {
      await dispatchFindProject(projectId ?? "");
    })();
  }, [dispatchFindProject, projectId]);

  return <>{isError ? <div>Something went wrong</div> : <div>{projectState.project.name}</div>}</>;
};

export default ProjectDetail;
