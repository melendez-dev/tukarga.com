// import header
import HeaderCustom from "../../Common/Header/Header";
import { Container } from "@material-ui/core";
export default function Header({ toggle }) {
  return (
    <Container>
      <HeaderCustom toggle={toggle} dark={true} />
    </Container>
  );
}
