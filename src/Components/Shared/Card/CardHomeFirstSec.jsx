import { Box, Typography } from "@material-ui/core";
export default function CardHomeFirstSec({
  icon,
  title,
  text,
  rever = false,
  fullWidth = false,
}) {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: rever ? "row-reverse" : "row",
        }}
      >
        <Box style={{ width: fullWidth ? "100%" : undefined }}>{icon}</Box>
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
                fontSize: "14px",
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
                fontSize: "14px",
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
