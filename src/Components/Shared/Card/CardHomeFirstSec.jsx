import { Box, Typography, useMediaQuery } from "@material-ui/core";
export default function CardHomeFirstSec({
  icon,
  title,
  text,
  rever = false,
  fullWidth = false,
}) {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: rever ? "row-reverse" : "row",
        }}
      >
        <Box style={{ maxWidth: fullWidth ? "70px" : undefined }}>{icon}</Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
          }}
        >
          <Box>
            <Typography
              style={{
                color: "#3C3C3B",
                fontSize: isMobile ? "12px" : "14px",
                lineHeight: "18px",
                marginBottom: "10px",
              }}
            >
              <b>{title}</b>
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: isMobile ? "12px" : "14px",
                color: "#3C3C3B",
                lineHeight: "18px",
                fontWeight: "300",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
