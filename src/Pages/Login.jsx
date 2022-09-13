import { useState } from "react";
import HeaderCustom from "../Components/Common/Header/Header";
import FristSection from "../Components/Common/Login/FristSection";
import FormLogin1 from "../Components/Common/ModuleHome/FourSection";
import { Box, Container } from "@material-ui/core";
import AtomForm from "../Atom/ModuleHome/FourSection/AtomFourSection";
import { FourSectionStyled } from "../styles/ModuleHome/FourtSeccion.styled";
export default function Login({ toggle }) {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <>
      <HeaderCustom toggle={toggle} darkLink={true} dark={true} />
      <FristSection toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
      {!toggleLogin ? (
        <FormLogin1 />
      ) : (
        <FourSectionStyled>
          <Container>
            <Box>
              <AtomForm
                title="Contáctanos ahora"
                subtitle="Si tienes alguna duda o inquietud, no dudes en contactarnos"
                buttonText="Enviar"
                type={true}
              />
            </Box>
          </Container>
        </FourSectionStyled>
      )}
    </>
  );
}
