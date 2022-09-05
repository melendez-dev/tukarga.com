import { Box, Typography, Container } from "@material-ui/core";
export default function CardWithIcon({ icon, title, subtitle }) {
  return (
    <>
      <Box
        style={{
          width: "319px",
          background: "#FCFCED",
          borderRadius: "8px",
          marginRight: "17px",
          padding: "8px",
        }}
      >
        <Box
          style={{
            marginBottom: "10px",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            style={{
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "16px",
              color: "#3C3C3B",
              marginBottom: "10px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              fontweight: "300",
              fontSize: "8px",
              lineHeight: "10px",
              color: " #3C3C3B",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
