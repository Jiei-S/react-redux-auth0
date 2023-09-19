import { useEffect } from "react";
import useAuthStore from "../modules/auth/hook";
import Loading from "./_shared/components/loading/primary";

const Login = (): JSX.Element => {
  const { loginWithRedirect } = useAuthStore();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  return <Loading />;
};

export default Login;
