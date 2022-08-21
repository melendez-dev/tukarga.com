import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import { FirstStyled } from "../../../styles/ModuleHome/FirstSection.styled";

// impor Atoms
import LeftIlustration from "../../../Atom/ModuleHome/FirstSection/LeftIlustration";
import RightSide from "../../../Atom/ModuleHome/FirstSection/RightSide";
export default function FirstSection() {
  return (
    <>
      <Container>
        <FirstStyled>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <LeftIlustration />
            </Grid>
            <Grid item xs={6}>
              <RightSide />
            </Grid>
          </Grid>
        </FirstStyled>
      </Container>
    </>
  );
}
