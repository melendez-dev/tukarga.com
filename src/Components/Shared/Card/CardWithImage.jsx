import { Box, Typography, Button, Grid } from "@material-ui/core";
// Icons
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
export default function CardWithImage({ img, title, subtitle, textButton }) {
  return (
    <Box
      style={{
        width: "496px",
        height: "184px",
        borderRadius: "10px",
        background: "#fff",
        display: "flex",
        padding: "8px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            style={{
              background: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "232px",
              height: "168px",
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
                  fontSize: "14px",
                  color: "#3C635D",
                  lineHeight: "18px",
                  width: "192px",
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
                  width: "192px",
                  marginTop: "8px",
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
              width: "192px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "13px",
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
