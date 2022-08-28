import { useEffect } from "react";
import { nameLinks } from "../../../utils/mics";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Box, Button, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "../../../assets/svg/ico_main-menu.svg";
export default function Links({ dark }) {
  const isMobile = useMediaQuery("(max-width:960px)");
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
      <Box
        className="container_links"
        style={{
          display: isMobile ? "flex" : undefined,
          justifyContent: isMobile ? "flex-end" : undefined,
        }}
      >
        {!isMobile && (
          <>
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
          </>
        )}
        <Button
          variant="contained"
          style={{
            height: "32px",
            width: "85px",
            backgroundColor: "#FCFCED",
            borderRadius: "8px",
          }}
        >
          <Link to="/login" className="links_header_login">
            Ingresar
          </Link>
        </Button>
        {isMobile && <IconMenu />}
      </Box>
    </>
  );
}
