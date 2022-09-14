import Header from "../Components/Common/ModuleHome/Header";
import FirstSection from "../Components/Common/ModuleHome/FirstSection";
import SecondSection from "../Components/Common/ModuleHome/SecondSection";
import ThridSection from "../Components/Common/ModuleHome/ThridSection";
import FourSection from "../Components/Common/ModuleHome/FourSection";
import Footer from "../Components/Common/Footer/Footer";
import FiveSection from "../Components/Common/ModuleHome/FiveSectionToggle";

// useContext
import { useContext } from "react";
import { BrandContext } from "../context/BrandContext";

export default function Home() {
  const { brand } = useContext(BrandContext);
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <FourSection />
      {brand && <FiveSection />}
      <Footer />
    </>
  );
}
