import { useState } from "react";
import { principalRoutes, routesName } from "./constants";
import { useRoutes } from "react-router-dom";

// components
import Home from "../Pages/Home";
import Companies from "../Pages/Companies";
import Conveyor from "../Pages/Conveyor";
import Login from "../Pages/Login";

export default function Router() {
  const [toggle, setToggle] = useState(false);
  const router = useRoutes([
    {
      path: principalRoutes.base, // pricipal
      element: <Home toggle={toggle} setToggle={setToggle} />,
    },
    // companies
    {
      path: routesName.companies,
      element: <Companies toggle={toggle} />,
    },
    {
      path: routesName.conveyor,
      element: <Conveyor toggle={toggle} />,
    },
    {
      path: routesName.login,
      element: <Login toggle={toggle} />,
    },
    // not found
    {
      path: "*",
      element: <div>Not found</div>,
    },
  ]);
  return router;
}
