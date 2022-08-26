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
            <AtomFormByHomePage
              title="Quieres más clientes satisfechos"
              subtitle="Diligencia el formulario y nos contactaremos contigo en breve."
              buttonText="Enviar"
            />
          </Box>
        </Container>
      </FourSectionStyled>
    </>
  );
}
