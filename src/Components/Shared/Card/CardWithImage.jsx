import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
// Icons
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
export default function CardWithImage({
  img,
  title,
  subtitle,
  textButton,
  setToggle,
  toggle = false,
}) {
  const isMobile = useContext(MobileContext);
  return (
    <Box
      style={{
        maxWidth: "100%",
        width: "100%",
        height: isMobile ? "100%" : "184px",
        borderRadius: "10px",
        display: "flex",
        padding: !isMobile ? "0px" : !toggle ? "10px" : "10px",
        backgroundColor: isMobile ? " #FCFCED" : "white",
        alignItems: !isMobile ? "center" : "flex-start",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} md={6}>
          <Box
            style={{
              background: `url(${img}) center no-repeat`,
              height: !isMobile ? "186px" : "96px",
              width: !isMobile ? "100%" : "87px",
              transition: "ease-out 0.5s",
              marginLeft: isMobile ? (!toggle ? "10px" : "0px") : "0px",
              marginTop: isMobile ? (toggle ? "0px" : "10px") : "0px",
              borderRadius: isMobile ? "8px" : "0px",
            }}
          />
        </Grid>
        <Grid item xs={8} md={6}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                style={{
                  fontWeight: "500",
                  fontSize: isMobile ? "12px" : "15px",
                  color: "#3C635D",
                  lineHeight: "18px",
                  maxWidth: isMobile ? "100%" : "90%",
                  marginTop: "8px",
                }}
              >
                <b>{title}</b>
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#3C3C3B",
                  lineHeight: "18px",
                  maxWidth: "192px",
                  marginTop: "8px",
                  minHeight: "36px",
                  display: isMobile ? "none" : "block",
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            style={{
              height: "32px",
              borderRadius: "10px",
              marginTop: "14px",
              maxWidth: "230px",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setToggle((prev) => !prev)}
          >
            <Typography
              style={{
                fontSize: isMobile ? "9px" : "13px",
                color: "#3C3C3B",
                fontWeight: "700",
                width: "100%",
                justifySelf: "flex-start",
              }}
            >
              {textButton}
            </Typography>
            <Box
              style={{
                justifySelf: "flex-end",
              }}
            >
              <Arrow />
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
