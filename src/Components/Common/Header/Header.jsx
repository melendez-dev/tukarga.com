import Links from "../../Shared/Link/Links";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";
import { HeaderStyled } from "../../../styles/Header.styled";
import { Grid, Box } from "@material-ui/core";

export default function Header({ toggle }) {
  return (
    <HeaderStyled>
      <Box className="header_link_logo">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <Links toggle={toggle} />
          </Grid>
        </Grid>
      </Box>
    </HeaderStyled>
  );
}
