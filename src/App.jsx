import "./styles/index.css"; //  import main styles
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

// context
import { MobileContext } from "./context/MobileContext";

// isMobile
import { useMediaQuery } from "@material-ui/core";

function App() {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <MobileContext.Provider value={isMobile}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MobileContext.Provider>
    </Suspense>
  );
}

export default App;
