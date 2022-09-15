import Header from "../Components/Common/ModuleCompanies/Header";
import FirstSection from "../Components/Common/ModuleCompanies/FirstSection";
import SecondSection from "../Components/Common/ModuleCompanies/SecondSection";
import ThirdSection from "../Components/Common/ModuleCompanies/ThridSection";
import FourSection from "../Components/Common/ModuleCompanies/FourSection";
import Footer from "../Components/Common/Footer/Footer";

// icons
// to pass this to utils or other file
import { ReactComponent as Dollar } from "../assets/svg/dollaricon.svg";
import { ReactComponent as Icon1 } from "../assets/svg/Icono (1).svg";
import { ReactComponent as Files } from "../assets/svg/Icono_files.svg";
import { ReactComponent as BrandIlustration1 } from "../assets/svg/Ilustracion_01MB.svg";
import { ReactComponent as Route } from "../assets/svg/router_icon.svg";

const data = [
  {
    icon: <Icon1 />,
    title: "Centralizado",
    text: "Un único canal para el manejo de proveedores de transporte",
    fullWidth: true,
  },
  {
    icon: <Files />,
    title: "Manejo de facturación",
    text: "Una especie de Operador Logístico en Linea que factura el 100% de cada operación",
    fullWidth: true,
  },
  {
    icon: <Route />,
    title: "Mejores opciones",
    text: "Tecnología aplicada a la búsqueda y calificación de la mejor solución, precio/ruta/ tipo de operación",
    fullWidth: true,
  },
  {
    icon: <Dollar />,
    title: "Precios competitivos",
    text: "Precios justos gracias al algoritmo de trackeo de precios de fletes.",
    fullWidth: true,
  },
];

export default function Generator() {
  const srcoll = (id) => {
    const part = document.querySelector(`#${id}`);
    part.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <FirstSection
        icon={BrandIlustration1}
        title="Tu mercancia controlada para que llegue sin contratiempo. "
        button="Contacta un comercial"
        scroll={srcoll}
        to="form"
      />
      <SecondSection
        html_text="
			<p>
				Todo lo que necesites transportar de la bodega al local,
				en el menor tiempo posible.
				</br>
				</br>

Con nuestras herramientas tecnológicas podrás tener el control de todo el proceso logístico.
</br>
				</br>
				<b>Diligencia el formulario y nos contactaremos contigo en breve.</b>
					</p>	
					"
      />
      <ThirdSection
        data={data}
        title="Ventajas para el
generador de carga"
      />
      <FourSection
        title="¡No lo pienses más!"
        subtitle="Diligencia el formulario y nos contactaremos contigo en breve."
        buttonText="Enviar"
        id="form"
        brand={true}
        withoutTextArea={true}
      />
      <Footer />
    </>
  );
}
