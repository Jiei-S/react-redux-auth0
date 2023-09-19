import { useTranslation } from "react-i18next";
import useAuthStore from "../../../../modules/auth/hook";

const Logout = (): JSX.Element => {
  const { logout } = useAuthStore();
  const { t } = useTranslation();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{t("header.logout")}</button>
  );
};

export default Logout;
