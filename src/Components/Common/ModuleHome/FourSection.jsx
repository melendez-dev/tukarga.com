import { FourSectionStyled } from "../../../styles/ModuleHome/FourtSeccion.styled";
import { Container } from "@material-ui/core";

import AtomFourSection from "../../../Atom/ModuleHome/FourSection/AtomFourSection";
import ToggleFourSection from "../../../Atom/ModuleHome/FourSection/ToggleFourSection";
// context
import { useContext } from "react";
import { BrandContext } from "../../../context/BrandContext";
export default function FourSection() {
  const { brand } = useContext(BrandContext);
  return (
    <FourSectionStyled>
      <Container>
        {!brand ? (
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
