import { Container } from "@material-ui/core";

// atoms
import AtomThridSection from "../../../Atom/ModuleHome/ThirdSection/AtomThridSection";
import ToggleThridSection from "../../../Atom/ModuleHome/ThirdSection/ToggleThirdSection";

// styles
import { ThridSectionStyled } from "../../../styles/ModuleHome/ThridSection.styled";
export default function ThridSection({ toggle }) {
  return (
    <ThridSectionStyled>
      <Container>
        {!toggle ? (
          <>
            <AtomThridSection />
          </>
        ) : (
          <>
            <ToggleThridSection />
          </>
        )}
      </Container>
    </ThridSectionStyled>
  );
}
