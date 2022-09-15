import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, useMediaQuery } from "@material-ui/core";
export default function ButtonIcoTextIco({
  firstIcon,
  title,
  subtitle,
  secondIcon,
  route,
  id,
}) {
  const isMobile = useContext(MobileContext);
  const navigate = useNavigate();
  return (
    <>
      <Box
        style={{
          width: "340px",
          maxWidth: "100%",
          border: "1px solid rgba(60, 60, 59, 1)",
          borderRadius: "8px",
          marginTop: "10px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`${route}`, {
            state: {
              id: id,
            },
          });
        }}
      >
        <Grid
          container
          style={{
            alignItems: "center",
          }}
        >
          <Grid item xs={1}>
            {firstIcon}
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{
                fontSize: isMobile ? "12px" : "14px",
                marginLeft: "8px",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              <b>{subtitle}</b>
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
            }}
          >
            {secondIcon}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
