import "./styles/index.css"; //  import main styles
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { SnackbarProvider } from "notistack";
// context
import { MobileContext } from "./context/MobileContext";

// isMobile
import { useMediaQuery } from "@material-ui/core";

function App() {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SnackbarProvider>
        <MobileContext.Provider value={isMobile}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MobileContext.Provider>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
