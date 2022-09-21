import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import HeaderCustom from "../Components/Common/Header/Header";
import FristSection from "../Components/Common/Login/FristSection";
import FormLogin1 from "../Components/Common/ModuleHome/FourSection";
import { Box, Container } from "@material-ui/core";
import AtomForm from "../Atom/ModuleHome/FourSection/AtomFourSection";
import { FourSectionStyled } from "../styles/ModuleHome/FourtSeccion.styled";
import Footer from "../Components/Common/Footer/Footer";
export default function Login({ toggle }) {
  const [toggleLogin, setToggleLogin] = useState(false);
  const isMobile = useContext(MobileContext);
  const location = useLocation();
  return (
    <>
      <HeaderCustom toggle={toggle} darkLink={true} dark={true} />
      <FristSection toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
      <Box
        style={{
          display: isMobile ? "none" : "block",
        }}
      >
        {!toggleLogin ? (
          <Box>
            <FormLogin1 router={location?.pathname === "/login"} />
          </Box>
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
      </Box>
      <Footer />
    </>
  );
}
