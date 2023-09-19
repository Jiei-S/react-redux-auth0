import { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import useAuthStore from "../../../../modules/auth/hook";
import Loading from "../loading/primary";

type Props = {
  component: ComponentType;
};

const AuthenticationGuard = ({ component }: Props): JSX.Element => {
  const { authState, isAuthenticated } = useAuthStore();
  const Component = withAuthenticationRequired(component);
  return isAuthenticated && !authState.initialized ? <Loading /> : <Component />;
};

export default AuthenticationGuard;
