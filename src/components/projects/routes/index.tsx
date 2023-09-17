import { RouteObject } from "react-router-dom";
import { PageKey } from "../../_shared/const/const";
import ProjectDetail from "../detail";
import ProjectList from "../list";

const projectsRouter: RouteObject[] = [
  {
    path: PageKey.projects,
    element: <ProjectList />,
  },
  {
    path: `${PageKey.projects}/:projectId`,
    element: <ProjectDetail />,
  },
];

export default projectsRouter;
