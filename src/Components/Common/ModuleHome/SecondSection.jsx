// styles
import { SecondSectionStyled } from "../../../styles/ModuleHome/SecondSection.styled";
import { Container } from "@material-ui/core";

import PrincipalServices from "../../../Atom/ModuleHome/SecondSection/PrincipalServices";
import ToggleSecondSection from "../../../Atom/ModuleHome/SecondSection/ToggleSecondSection";
// context
import { useContext } from "react";
import { BrandContext } from "../../../context/BrandContext";
export default function SecondSection() {
  const { brand } = useContext(BrandContext);
  return (
    <SecondSectionStyled>
      <Container>
        {!brand ? (
          <>
            <PrincipalServices />
          </>
        ) : (
          <>
            <ToggleSecondSection />
          </>
        )}
      </Container>
    </SecondSectionStyled>
  );
}
