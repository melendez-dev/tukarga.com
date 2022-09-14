import "./styles/index.css"; //  import main styles
import { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

// skacnc provider
import { SnackbarProvider } from "notistack";
// context
import { MobileContext } from "./context/MobileContext";

// isMobile
import { useMediaQuery } from "@material-ui/core";

// brand context
import { BrandContext } from "./context/BrandContext";

// landing view
import { LandingViewContext } from "./context/LadingViewContext";

function App() {
  // states
  const isMobile = useMediaQuery("(max-width:960px)");
  const [brand, setBrand] = useState(false); // false = Oficios // true = Tukarga
  const [landingView, setLandingView] = useState(false); // false = Oficios // true = Tukarga
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SnackbarProvider>
        <BrandContext.Provider
          value={{
            brand, // state
            setBrand, // the function to change the state
          }}
        >
          <LandingViewContext.Provider
            value={{
              landingView,
              setLandingView,
            }}
          >
            <MobileContext.Provider value={isMobile}>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </MobileContext.Provider>
          </LandingViewContext.Provider>
        </BrandContext.Provider>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
