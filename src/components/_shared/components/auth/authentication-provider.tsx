import { useNavigate } from "react-router-dom";
import { AppState, Auth0Provider as Provider } from "@auth0/auth0-react";

type Props = {
  children: JSX.Element;
};

const Auth0Provider = ({ children }: Props) => {
  const navigate = useNavigate();
  const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: clientId } = import.meta.env;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    return null;
  }

  return (
    <Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Provider>
  );
};

export default Auth0Provider;
