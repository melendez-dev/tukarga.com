import Header from "../Components/Common/ModuleCompanies/Header";
import FirstSection from "../Components/Common/ModuleCompanies/FirstSection";
import SecondSection from "../Components/Common/ModuleCompanies/SecondSection";
import ThirdSection from "../Components/Common/ModuleCompanies/ThridSection";
export default function Companies({ toggle }) {
  return (
    <>
      <Header toggle={toggle} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
}
