import { useMediaQuery } from "@material-ui/core";
import Header from "../Components/Common/ModuleCompanies/Header";
import FirstSection from "../Components/Common/ModuleCompanies/FirstSection";
import SecondSection from "../Components/Common/ModuleCompanies/SecondSection";
import ThirdSection from "../Components/Common/ModuleCompanies/ThridSection";
import FourSection from "../Components/Common/ModuleCompanies/FourSection";
import Footer from "../Components/Common/Footer/Footer";

// to pass this to utils or other file
// icons
import { ReactComponent as Ilustration } from "../assets/svg/Ilustración_02.svg";
import { ReactComponent as IconMotorcycle } from "../assets/svg/morotcycle_backg.svg";
import { ReactComponent as IconTime } from "../assets/svg/24hours.svg";
import { ReactComponent as IconRouter } from "../assets/svg/router_icon.svg";

// icons mobile

import { ReactComponent as Ilustration2 } from "../assets/svg/Ilustración_02mobilee.svg";

const data = [
  {
    icon: <IconMotorcycle />,
    title: "Domicilios / E-commerce / Express.",
    text: "Recogemos en el momento que necesites y entregamos a tu cliente final en el menor tiempo posible. ",
    fullWidth: true,
  },
  {
    icon: <IconTime />,
    title: "Same day/ Next day.",
    text: "Recogemos y entregamos tus productos en el mismo día o al día siguiente. ",
    fullWidt: true,
  },
  {
    icon: <IconRouter />,
    title: "Ruteo.",
    text: "Utilizando nuestra tecnología que nos ayuda a optimizar el tiempo, recogemos, zonificamos y entregamos tus productos.",
    fullWidth: true,
  },
];
export default function Companies({ toggle }) {
  const isMobil = useMediaQuery("(max-width:930px)");
  const srcoll = (id) => {
    const part = document.querySelector(`#${id}`);
    part.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header toggle={toggle} />
      <FirstSection
        icon={isMobil ? <Ilustration2 /> : <Ilustration />}
        title="Estamos preparados para
        resolver tus necesidades logísticas"
        button="conctacta un comercial"
        scroll={srcoll}
        to="information"
      />
      <SecondSection
        html_text="
        Quieres más clientes sastifechos, la ayuda de nuestra red de
        <b>más de 4000 profionales,</b>
        Llevamos tus envios a tiempo"
        text="Contactanos y crezcamos juntos."
      />
      <ThirdSection data={data} />
      <FourSection
        title="Quieres más clientes satisfechos"
        subtitle="Diligencia el formulario y nos contactaremos contigo en breve."
        buttonText="Enviar"
        id="information"
      />
      <Footer />
    </>
  );
}
