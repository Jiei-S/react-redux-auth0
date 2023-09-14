import { useEffect } from "react";
import { Loading } from "../common/components/loading/primary";
import { Heading1 } from "./components/heading/h1";
import { Button } from "./components/button/primary";
import useProjectStore from "../../modules/projects/hook";

export const Project = (): JSX.Element => {
  const {
    dispatchFindProject,
    dispatchCreateProject,
    project,
    isLoading,
    isError,
  } = useProjectStore();

  useEffect(() => {
    (async () => {
      await dispatchFindProject("e8ed3086-dedc-4d80-8f03-54254186255c");
    })();
  }, [dispatchFindProject]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Heading1 text={project.name} />
      <Button
        text="Click"
        onClick={() =>
          dispatchCreateProject({
            name: "Project 1",
            status: "todo",
          })
        }
      />
      {isError ? <p>Something went wrong</p> : <p>{project.name}</p>}
    </>
  );
};
