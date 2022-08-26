import Header from "../Components/Common/ModuleCompanies/Header";
import FirstSection from "../Components/Common/ModuleCompanies/FirstSection";
import SecondSection from "../Components/Common/ModuleCompanies/SecondSection";
export default function Companies({ toggle }) {
  return (
    <>
      <Header toggle={toggle} />
      <FirstSection />
      <SecondSection />
    </>
  );
}
