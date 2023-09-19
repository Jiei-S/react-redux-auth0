import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Logout from "../components/button/logout";
import Logo from "../components/logo/logo";

const Header = styled("header")({
  flexGrow: 1,
});

const CustomAppBar = styled(AppBar)({
  position: "static",
  border: "none",
});

const CustomToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const CustomLogoTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  "&:hover": {
    cursor: "pointer",
  },
}));

const CustomHeader = (): JSX.Element => (
  <Header>
    <CustomAppBar>
      <CustomToolbar variant="dense">
        <Link href={"/"} underline="hover">
          <CustomLogoTypography variant="h6" color="inherit">
            <Logo />
          </CustomLogoTypography>
        </Link>
        <Logout />
      </CustomToolbar>
    </CustomAppBar>
  </Header>
);

export default CustomHeader;
