import { useEffect } from "react";
import { nameLinks } from "../../../utils/mics";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Links({ dark }) {
  const [linkSelect, setLinkSelect] = useState(1);
  // get the router
  const { pathname } = useLocation();

  // switch the router with nameLinks
  useEffect(() => {
    nameLinks.forEach((link) => {
      if (link.url === pathname) {
        setLinkSelect(link.id);
      }
      return;
    });
  }, [pathname]);

  return (
    <>
      <Box className="container_links">
        {nameLinks.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={
              linkSelect === item?.id
                ? "link_selected"
                : dark
                ? "links_header_black"
                : "links_header_light"
            }
            onClick={() => setLinkSelect(item?.id)}
          >
            <span>{item.name}</span>
          </Link>
        ))}
        <Button
          variant="contained"
          style={{
            height: "32px",
            width: "85px",
            backgroundColor: "#FCFCED",
            borderRadius: "8px",
          }}
        >
          <Link to="/contacto" className="links_header_login">
            Ingresar
          </Link>
        </Button>
      </Box>
    </>
  );
}
