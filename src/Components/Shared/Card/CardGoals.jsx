import { Box, Typography, useMediaQuery } from "@material-ui/core";
export default function CardGoal({ title, subtitle }) {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Box
        style={{
          maxWidth: "224px",
          maxHeight: "114px",
          padding: "16px",
          border: "1px solid #3C3C3B",
          borderRadius: "8px",
          transition: "ease-out 0.5s",
        }}
      >
        <Box>
          <Typography
            style={{
              fontSize: isMobile ? "24px" : "36px",
              fontWeight: "500",
              color: "#3C3C3B",
              lineHeight: "40px",
              marginBottom: isMobile ? "0px" : "8px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              fontSize: isMobile ? "8px" : "12px",
              fontWeight: "300",
              color: "#3C3C3B",
              lineHeight: "16px",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
