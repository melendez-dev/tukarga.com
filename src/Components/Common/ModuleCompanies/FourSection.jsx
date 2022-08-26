import { Container, Typography, Box } from "@material-ui/core";
// styles
import { FourSectionStyled } from "../../../styles/ModuleCompanies/FourSection.styled";
import AtomFormByHomePage from "../../../Atom/ModuleHome/FourSection/AtomFourSection";
export default function FourSection() {
  return (
    <>
      <FourSectionStyled>
        <Container>
          <Box>
            <AtomFormByHomePage />
          </Box>
        </Container>
      </FourSectionStyled>
    </>
  );
}
