import "./styles/index.css"; //  import main styles
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
