import { nameLinks } from "../../../utils/mics";
import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Links({ toggle }) {
  const [linkSelect, setLinkSelect] = useState(1);
  return (
    <>
      <Box className="container_links">
        {nameLinks.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={
              linkSelect === item.id
                ? "link_selected"
                : toggle
                ? "links_header_black"
                : "links_header_light"
            }
            onClick={() => {
              setLinkSelect(item.id);
            }}
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
