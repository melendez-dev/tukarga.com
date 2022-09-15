import { Container } from "@material-ui/core";

// atoms
import AtomThridSection from "../../../Atom/ModuleHome/ThirdSection/AtomThridSection";
import ToggleThridSection from "../../../Atom/ModuleHome/ThirdSection/ToggleThirdSection";

// styles
import { ThridSectionStyled } from "../../../styles/ModuleHome/ThridSection.styled";

// context
import { useContext } from "react";
import { BrandContext } from "../../../context/BrandContext";
export default function ThridSection() {
  const { brand } = useContext(BrandContext);
  return (
    <ThridSectionStyled>
      <Container>
        {!brand ? (
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
