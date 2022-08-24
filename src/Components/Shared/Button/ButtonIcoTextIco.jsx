import { Box, Typography, Grid } from "@material-ui/core";
export default function ButtonIcoTextIco({
  firstIcon,
  title,
  subtitle,
  secondIcon,
}) {
  return (
    <>
      <Box
        style={{
          width: "368px",
          border: "1px solid rgba(60, 60, 59, 1)",
          borderRadius: "8px",
          marginTop: "10px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
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
                fontSize: "14px",
                marginLeft: "8px",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
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
