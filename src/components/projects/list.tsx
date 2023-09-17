import { useEffect } from "react";
import useProjectStore from "../../modules/projects/hook";
import Link from "../_shared/components/link/primary";
import Loading from "../_shared/components/loading/primary";
import { PageKey } from "../_shared/const/const";

const ProjectList = (): JSX.Element => {
  const {
    dispatchGetProject,
    projectsState,
    isProjectsLoading: isLoading,
    isProjectsError: isError,
  } = useProjectStore();

  useEffect(() => {
    (async () => {
      await dispatchGetProject();
    })();
  }, [dispatchGetProject]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {projectsState.projects.map((project) => (
        <Link key={project.id} href={`/${PageKey.projects}/${project.id}`} title={project.name} underline="hover" />
      ))}
      {isError && <p>Something went wrong</p>}
    </>
  );
};

export default ProjectList;
