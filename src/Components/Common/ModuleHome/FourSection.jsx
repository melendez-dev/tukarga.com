import { FourSectionStyled } from "../../../styles/ModuleHome/FourtSeccion.styled";
import { Container } from "@material-ui/core";

import AtomFourSection from "../../../Atom/ModuleHome/FourSection/AtomFourSection";
import ToggleFourSection from "../../../Atom/ModuleHome/FourSection/ToggleFourSection";

export default function FourSection({ toggle }) {
  return (
    <FourSectionStyled>
      <Container>
        {!toggle ? (
          <>
            <AtomFourSection />
          </>
        ) : (
          <>
            <ToggleFourSection />
          </>
        )}
      </Container>
    </FourSectionStyled>
  );
}
