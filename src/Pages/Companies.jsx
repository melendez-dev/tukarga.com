import Header from "../Components/Common/ModuleCompanies/Header";
import FirstSection from "../Components/Common/ModuleCompanies/FirstSection";
import SecondSection from "../Components/Common/ModuleCompanies/SecondSection";
import ThirdSection from "../Components/Common/ModuleCompanies/ThridSection";
import FourSection from "../Components/Common/ModuleCompanies/FourSection";
import Footer from "../Components/Common/Footer/Footer";
export default function Companies({ toggle }) {
  return (
    <>
      <Header toggle={toggle} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <Footer />
    </>
  );
}
