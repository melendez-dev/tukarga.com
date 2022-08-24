// styles
import { SecondSectionStyled } from "../../../styles/ModuleHome/SecondSection.styled";
import { Container } from "@material-ui/core";

import PrincipalServices from "../../../Atom/ModuleHome/SecondSection/PrincipalServices";
import ToggleSecondSection from "../../../Atom/ModuleHome/SecondSection/ToggleSecondSection";
export default function SecondSection({ toggle }) {
  return (
    <SecondSectionStyled>
      <Container>
        {!toggle ? (
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
