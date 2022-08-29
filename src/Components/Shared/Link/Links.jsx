import { useEffect, useState } from "react";
import { nameLinks } from "../../../utils/mics";
import { useLocation } from "react-router-dom";
import { Box, Button, useMediaQuery, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "../../../assets/svg/ico_main-menu.svg";
import { ReactComponent as IconClose } from "../../../assets/svg/ico_close_01.svg";
import Dialog from "@mui/material/Dialog";
export default function Links({ dark }) {
  const isMobile = useMediaQuery("(max-width:960px)");
  const [linkSelect, setLinkSelect] = useState(1);
  // get the router
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

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
        {isMobile && (
          <Box onClick={() => setOpen(!open)}>
            <IconMenu />
          </Box>
        )}
        <Dialog open={open} maxWidth="sm" fullScreen>
          <Box
            style={{
              background: " #3C3C3B",
              height: "100%",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <Grid item xs={10}>
                <Box>
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
                      <span style={{ display: "block" }}>{item.name}</span>
                    </Link>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box onClick={() => setOpen(!open)}>
                  <IconClose />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}
