import { Box, Typography } from "@material-ui/core";
import { borderRadius, height } from "@mui/system";
export default function CardGoal({ title, subtitle }) {
  return (
    <>
      <Box
        style={{
          width: "224px",
          height: "114px",
          padding: "16px",
          border: "1px solid #3C3C3B",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography
            style={{
              fontSize: "36px",
              fontWeight: "500",
              color: "#3C3C3B",
              lineHeight: "40px",
              marginBottom: "8px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              fontSize: "12px",
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
