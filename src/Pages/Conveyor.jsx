import Header from "../Components/Common/ModuleCompanies/Header";
import FirstSection from "../Components/Common/ModuleCompanies/FirstSection";
import SecondSection from "../Components/Common/ModuleCompanies/SecondSection";
import ThirdSection from "../Components/Common/ModuleCompanies/ThridSection";
import FourSection from "../Components/Common/ModuleCompanies/FourSection";
import Footer from "../Components/Common/Footer/Footer";

// icons
import { ReactComponent as Ilustraton } from "../assets/svg/Ilustracion_0001.svg";

// to pass this to utils or other file

import { ReactComponent as Dollar } from "../assets/svg/dollaricon.svg";
import { ReactComponent as Car } from "../assets/svg/caricon.svg";
import { ReactComponent as Builiding } from "../assets/svg/buildingicon.svg";
import { ReactComponent as Time } from "../assets/svg/time2icon.svg";
import { ReactComponent as Square } from "../assets/svg/squrare2icon.svg";
import { ReactComponent as Heart } from "../assets/svg/hearicon.svg";

const data = [
  {
    icon: <Dollar />,
    title: "Ganancia Segura.",
    text: "Con cada servicio que realizado se acumulará en tu Wallet y lo recibirás el segundo y cuarto Martes de cada mes. ",
    fullWidth: true,
  },
  {
    icon: <Time />,
    title: "Organiza tu tiempo o a tu ritmo.",
    text: "Agenda tu disponibilidad para realizar entregas.",
    fullWidth: true,
  },
  {
    icon: <Square />,
    title: "Elige lo que te gusta.",
    text: "Tenemos diferentes tipos de servicios, escoge el que se acomode a tus necesidades. ",
    fullWidth: true,
  },
  {
    icon: <Car />,
    title: "Sácale provecho a tu vehículo.",
    text: "Tenemos servicios para todo tipo de vehículo.",
    fullWidth: true,
  },
  {
    icon: <Builiding />,
    title: "Apoya el crecimiento de tu ciudad.",
    text: "Entre más servicios realices, mayor será tu ganancia y tendremos más clientes que confiarán en nosotros. ",
    fullWidth: true,
  },
  {
    icon: <Heart />,
    title: "Estamos contigo.",
    text: "Tenemos un equipo de soporte, que te ayudará durante todo tu proceso. ",
    fullWidth: true,
  },
];

export default function Conveyor({ toggle }) {
  return (
    <>
      <Header toggle={toggle} />
      <FirstSection
        icon={Ilustraton}
        title="¡Crezcamos juntos!"
        button="Inscríbete ahora!"
      />
      <SecondSection
        html_text="<p>Crece aumentando tus ganancias,
				cumpliendo tus metas y mejorando tu calidad de vida.
				Unete a nuestra red con tu vehículo.</p>"
        text="Diligencia el formulario y nos contactaremos contigo en breve."
      />
      <ThirdSection data={data} />
      <FourSection
        title="¡No lo pienses más!"
				subtitle="Diligencia el formulario y nos contactaremos contigo en breve."
				buttonText="Enviar"
				type={true}
      />
      <Footer />
    </>
  );
}
