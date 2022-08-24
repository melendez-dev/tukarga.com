import { useState } from "react";
import Header from "../Components/Common/ModuleHome/Header";
import FirstSection from "../Components/Common/ModuleHome/FirstSection";
import SecondSection from "../Components/Common/ModuleHome/SecondSection";
import ThridSection from "../Components/Common/ModuleHome/ThridSection";
import FourSection from "../Components/Common/ModuleHome/FourSection";
import Footer from "../Components/Common/Footer/Footer";
export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <FirstSection toggle={toggle} />
      <SecondSection toggle={toggle} />
      <ThridSection toggle={toggle} />
      <FourSection toggle={toggle} />
      <Footer />
    </>
  );
}
