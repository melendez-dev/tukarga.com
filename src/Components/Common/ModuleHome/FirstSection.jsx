import { Container, Grid } from "@material-ui/core";
import { FirstStyled } from "../../../styles/ModuleHome/FirstSection.styled";

// impor Atoms
import LeftIlustration from "../../../Atom/ModuleHome/FirstSection/LeftIlustration";
import RightSide from "../../../Atom/ModuleHome/FirstSection/RightSide";
import ToggleFirstSection from "../../../Atom/ModuleHome/FirstSection/ToggleFirstSection";
export default function FirstSection({ toggle }) {
  return (
    <>
      <Container>
        <FirstStyled>
          {!toggle ? (
            <>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <LeftIlustration />
                </Grid>
                <Grid item xs={6}>
                  <RightSide />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <ToggleFirstSection />
            </>
          )}
        </FirstStyled>
      </Container>
    </>
  );
}
