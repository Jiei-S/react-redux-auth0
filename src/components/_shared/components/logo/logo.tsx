import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

const Logo = (): JSX.Element => {
  const { t } = useTranslation();
  return <Box>{t("logo")}</Box>;
};

export default Logo;
