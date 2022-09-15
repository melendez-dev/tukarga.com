import { useContext } from "react";
import { BrandContext } from "../context/BrandContext";
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
import { ReactComponent as BrandIlustration1 } from "../assets/svg/Ilustración_02BM.svg";
import { ReactComponent as Route } from "../assets/svg/router_icon.svg";

const data = [
  {
    icon: <Dollar />,
    title: "Ganancia Segura.",
    text: "Cada servicio realizado se acumulará en tu wallet y lo recibirás el segundo y cuarto martes de cada mes.",
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

// data brand
const dataBrand = [
  {
    icon: <Builiding />,
    title: "Apoya el crecimiento empresarial",
    text: "Somos parte del crecimiento de tu empresa transportadora. ",
    fullWidth: true,
  },
  {
    icon: <Dollar />,
    title: "Ganancia Segura.",
    text: "Accede a más de 2,5 millones toneladas al año para transportar.",
    fullWidth: true,
  },
  {
    icon: <Route />,
    title: "Ruteo.",
    text: "Utilizando nuestra tecnología que nos ayuda a optimizar la logística de entrega de carga.",
  },
];

export default function Conveyor({ toggle }) {
  const { brand } = useContext(BrandContext);
  const srcoll = (id) => {
    const part = document.querySelector(`#${id}`);
    part.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header toggle={toggle} />
      {brand ? (
        <>
          <FirstSection
            icon={BrandIlustration1}
            title="Siendo parte escencial del
							crecimiento de tu empresa"
            button="Contacta un comercial"
            scroll={srcoll}
            to="form"
          />
          <SecondSection
            html_text="
					<p>
						Somos el mejor aliado para cientos de <b>empresas de transporte</b>, entregamos acceso a un segmento de transporte que por sí solos no son capaces de cumplir.</br></br></br>
						<b>
							Contactanos y crezcamos juntos.
						</b>
					</p>	
					"
          />
          <ThirdSection
            data={dataBrand}
            title="Ventajas para las
						empresas de transporte"
          />
          <FourSection
            title="Quieres ser parte del crecimieto? "
            subtitle="Diligencia el formulario y nos contactaremos contigo en breve."
            buttonText="Enviar"
            type={true}
            id="form"
            brand={true}
          />
        </>
      ) : (
        <>
          <FirstSection
            icon={Ilustraton}
            title="¡Crezcamos juntos!"
            button="Inscríbete ahora!"
            scroll={srcoll}
            to="form"
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
            id="form"
          />
        </>
      )}

      <Footer />
    </>
  );
}
