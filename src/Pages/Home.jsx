import Header from "../Components/Common/ModuleHome/Header";
import FirstSection from "../Components/Common/ModuleHome/FirstSection";
import SecondSection from "../Components/Common/ModuleHome/SecondSection";
import ThridSection from "../Components/Common/ModuleHome/ThridSection";
import FourSection from "../Components/Common/ModuleHome/FourSection";
import Footer from "../Components/Common/Footer/Footer";
import FiveSection from "../Components/Common/ModuleHome/FiveSectionToggle";
export default function Home({ toggle, setToggle }) {
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <FirstSection toggle={toggle} setToggle={setToggle} />
      <SecondSection toggle={toggle} />
      <ThridSection toggle={toggle} />
      <FourSection toggle={toggle} />
      {toggle && <FiveSection />}
      <Footer />
    </>
  );
}
