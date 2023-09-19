import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { AppDispatch, RootState } from "..";
import { AuthSliceName, setAccessToken, setInitialized } from "./slice";

const useAuthStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isAuthenticated,
    isLoading,
    error: authError,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  const authState = useSelector<RootState, RootState[AuthSliceName.auth]>((state) => state.auth);

  useEffect(() => {
    const initialize = async () => {
      const token = await getAccessTokenSilently();
      dispatch(setAccessToken(token));
      dispatch(setInitialized(true));
    };
    if (!isLoading && isAuthenticated) initialize();
  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  return { authState, isAuthenticated, authError, loginWithRedirect, logout };
};

export default useAuthStore;
