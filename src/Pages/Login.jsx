import { Box } from "@material-ui/core";
import HeaderCustom from "../Components/Common/Header/Header";
import FristSection from "../Components/Common/Login/FristSection";
export default function Login({ toggle }) {
  return (
    <>
      <HeaderCustom toggle={toggle} darkLink={true} dark={true} />
      <FristSection />
    </>
  );
}
