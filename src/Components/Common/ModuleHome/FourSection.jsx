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
            <AtomFourSection
              title="Contáctanos ahora"
              subtitle="Para contactar un ejecutivo comercial, llena el siguiente formulario"
              buttonText="Enviar"
            />
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
