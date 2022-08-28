import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
// Icons
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
export default function CardWithImage({
  img,
  title,
  subtitle,
  textButton,
  setToggle,
}) {
  const isMobile = useMediaQuery("(max-width:960px)");
  console.log(img);
  return (
    <Box
      style={{
        maxWidthh: "350px",
        width: "100%",
        height: "184px",
        borderRadius: "10px",
        background: "#fff",
        display: "flex",
        padding: isMobile ? "0px" : "8px",
        backgroundColor: isMobile ? " #FCFCED" : "white",
        alignItems: isMobile ? "center" : "flex-start",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            style={{
              background: `url(${img}) center`,
              maxWidth: isMobile ? "126px" : "232px",
              height: isMobile ? "126px" : "168px",
              transition: "ease-out 0.5s",
            }}
          />
        </Grid>
        <Grid item xs={6}>
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
                  fontSize: isMobile ? "12px" : "14px",
                  color: "#3C635D",
                  lineHeight: "18px",
                  maxWidth: "192px",
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
              maxWidth: "192px",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setToggle((prev) => !prev)}
          >
            <Typography
              style={{
                fontSize: isMobile ? "11px" : "13px",
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
