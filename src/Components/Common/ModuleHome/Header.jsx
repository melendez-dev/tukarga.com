import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
// import styles
import { HeaderStyled } from "../../../styles/ModuleHome/header.styled";
// import icons

// import Header
import HeaderBanner from "../../Common/Header/Header";
import TextLeft from "../../../Atom/ModuleHome/Header/TextLeft";
import TextRight from "../../../Atom/ModuleHome/Header/TextRight";
// import CardWithImage

// images

// context
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext";
// use the contex
import { useContext } from "react";

export default function Header() {
  // KNOW IF IS MOBILE
  const isMobile = useContext(MobileContext);
  // KNOW THE BRAND
  const { brand, setBrand } = useContext(BrandContext);
  const [background, setBackground] = useState("desktopBackground2");
  const [secondBackground, setSecondBackground] = useState("firstBackground2");
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    if (brand) {
      setBackground("desktopBackground2hover");
    } else {
      setBackground("desktopBackground2");
    }
  }, [brand]);

  return (
    <HeaderStyled>
      {isMobile && (
        <Box
          className={brand ? "secondBackground" : "firstBackground"}
          style={{ minHeight: isMobile ? "513px" : undefined }}
        >
          <HeaderBanner dark={false} toggle={brand} />
          <Container>
            <Box className={!isMobile ? "fixedBotton" : undefined}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextLeft toggle={brand} isMobile={isMobile} />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
      {/*Desktop*/}
      {!isMobile && (
        <Grid container style={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            style={{
              position: "absolute",
              width: "100%",
            }}
          >
            <HeaderBanner
              dark={false}
              toggle={brand}
              darkLink={changeColor ? false : true}
              changeColor={changeColor}
            />
          </Grid>

          <Grid item xs={6} className={brand ? background : secondBackground}>
            <Box className="leftTextSide">
              <TextLeft
                toggle={brand}
                isMobile={isMobile}
                changeColor={changeColor}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            className={brand ? secondBackground : background}
            onMouseEnter={() => {
              !brand && setSecondBackground("desktopBackgroundOpacity1");
              brand && setBackground("desktopBackground2");
              brand && setSecondBackground("firstBackground2");
              setChangeColor(true);
            }}
            onMouseLeave={() => {
              !brand && setSecondBackground("firstBackground2");
              brand && setBackground("desktopBackground2hover");
              brand && setSecondBackground("desktopBackgroundOpacity1");
              setChangeColor(false);
            }}
          >
            <Box className="leftTextSide">
              <TextRight
                setBrand={setBrand}
                changeColor={changeColor}
                toggle={brand}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </HeaderStyled>
  );
}
