import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  href: string;
  underline: "none" | "hover" | "always";
};

const CustomLink = ({ title, href, underline }: Props): JSX.Element => (
  <Link color="inherit" href={href} underline={underline}>
    <Typography variant="body2" component="div">
      {title}
    </Typography>
  </Link>
);

export default CustomLink;
