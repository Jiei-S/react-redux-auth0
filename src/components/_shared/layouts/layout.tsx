import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CustomHeader from "./header";

const Root = styled("div")({
  backgroundColor: "#fff",
  display: "flex",
  height: "100%",
});

const Container = styled("div")({
  width: "100%",
  padding: "1.4rem 3.5rem",
});

const Layout = (): JSX.Element => (
  <>
    <CustomHeader />
    <Root>
      <Container>
        <Outlet />
      </Container>
    </Root>
  </>
);

export default Layout;
