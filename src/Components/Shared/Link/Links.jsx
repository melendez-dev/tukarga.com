import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext.jsx";
import { nameLinks, nameLinksBrand } from "../../../utils/mics";
import { useLocation } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "../../../assets/svg/ico_main-menu.svg";
import { ReactComponent as IconMenuOrange } from "../../../assets/svg/ico_main-menu2.svg";
import { ReactComponent as IconClose } from "../../../assets/svg/ico_close_01.svg";
import Dialog from "@mui/material/Dialog";

// icons
import { ReactComponent as Twitter } from "../../../assets/svg/twitter.svg";
import { ReactComponent as FB } from "../../../assets/svg/FB.svg";
import { ReactComponent as In } from "../../../assets/svg/Path 2520.svg";

export default function Links({ dark, darkLink, changeColor }) {
  const [linkSelect, setLinkSelect] = useState(1);
  const navigate = useNavigate();
  // get the router
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // context mobile
  const isMobile = useContext(MobileContext);
  const { brand } = useContext(BrandContext);

  const selectDesktop = brand ? nameLinksBrand : nameLinks;
  // switch the router with nameLinks
  useEffect(() => {
    let selected = brand ? nameLinksBrand : nameLinks;
    selected.forEach((link) => {
      if (link.url === pathname) {
        setLinkSelect(link.id);
      } else if ("/login" === pathname) {
        setLinkSelect(0);
      } else if ("/quotation" === pathname) {
        setLinkSelect(0);
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
            {selectDesktop.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className={
                  linkSelect === item?.id
                    ? "link_selected"
                    : darkLink
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
        <Link to="/login" className="links_header_login">
          <Button
            variant={
              isMobile
                ? dark
                  ? "outlined"
                  : "contained"
                : changeColor
                ? "outlined"
                : dark
                ? "outlined"
                : "contained"
            }
            style={{
              height: "32px",
              width: "85px",
              backgroundColor: dark
                ? undefined
                : "#FCFCED" || changeColor
                ? undefined
                : "#FCFCED",
              borderRadius: "8px",
              marginLeft: "20px",
              fontSize: "10px",
              border: dark
                ? "1px solid #D74723"
                : undefined || changeColor
                ? "1px solid #D74723"
                : undefined,
              borderRadius: dark ? "8px" : undefined,
              color: dark
                ? "#D74723"
                : undefined || changeColor
                ? "#D74723"
                : undefined,
              borderColor: dark
                ? "#D74723"
                : undefined || changeColor
                ? "#D74723"
                : undefined,
              transition: "all 0.3s ease-in-out",
            }}
          >
            Ingresar
          </Button>
        </Link>

        {isMobile && (
          <Box onClick={() => setOpen(!open)} style={{ marginLeft: "3%" }}>
            {dark ? <IconMenuOrange /> : <IconMenu />}
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
                maxWidth: "100%",
                padding: "24px",
                display: "flex",
              }}
            >
              <Grid item xs={11}>
                <Box>
                  <Typography
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: " #FFFFFF",
                    }}
                  >
                    Menú
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box onClick={() => setOpen(!open)}>
                  <IconClose />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  {brand
                    ? nameLinksBrand?.map((item, index) => (
                        <Link
                          to={item.url}
                          key={index}
                          style={{
                            color: linkSelect === item?.id ? "#ff6600" : "#fff",
                            textDecoration: "none",
                          }}
                          onClick={() => setLinkSelect(item?.id)}
                        >
                          <span
                            style={{
                              display: "block",
                              width: "30%",
                              marginTop: "15px",
                              borderBottom:
                                linkSelect === item?.id
                                  ? "2px solid #ff6600"
                                  : "2px solid transparent",
                            }}
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))
                    : nameLinks.map((item, index) => (
                        <Link
                          to={item.url}
                          key={index}
                          style={{
                            color: linkSelect === item?.id ? "#ff6600" : "#fff",
                            textDecoration: "none",
                          }}
                          onClick={() => setLinkSelect(item?.id)}
                        >
                          <span
                            style={{
                              display: "block",
                              width: "30%",
                              marginTop: "15px",
                              borderBottom:
                                linkSelect === item?.id
                                  ? "2px solid #ff6600"
                                  : "2px solid transparent",
                            }}
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Button
                  style={{
                    padding: "4px 16px 6px",
                    width: "76px",
                    height: "32px",
                    background: "#FF6600",
                    borderRadius: "8px",
                    fontSize: "10px",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Ingresar
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "100%",
                  }}
                >
                  <Box
                    style={{
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      curson: "pointer",
                    }}
                  >
                    <Twitter />
                  </Box>
                  <Box
                    style={{
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      curson: "pointer",
                    }}
                  >
                    <FB />
                  </Box>
                  <Box
                    style={{
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      curson: "pointer",
                    }}
                  >
                    <In />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}
