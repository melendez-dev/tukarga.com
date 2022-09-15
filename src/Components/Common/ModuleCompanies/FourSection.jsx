import { Container, Typography, Box } from "@material-ui/core";
// styles
import { FourSectionStyled } from "../../../styles/ModuleCompanies/FourSection.styled";
import AtomFormByHomePage from "../../../Atom/ModuleHome/FourSection/AtomFourSection";
export default function FourSection({
  title,
  subtitle,
  buttonText,
  type = false,
  id = "#",
  brand,
}) {
  return (
    <>
      <FourSectionStyled id={id}>
        <Container>
          <Box>
            <AtomFormByHomePage
              title={title}
              subtitle={subtitle}
              buttonText={buttonText}
              type={type}
              brand={brand}
            />
          </Box>
        </Container>
      </FourSectionStyled>
    </>
  );
}
