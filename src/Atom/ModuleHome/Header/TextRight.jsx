import { Box, Typography, Button } from "@material-ui/core";
export default function TextRight({ setBrand, changeColor, toggle }) {
  return (
    <>
      <Box
        style={{
          textAlign: "right",
        }}
      >
        <Typography className={changeColor ? "title" : "titleGreen"}>
          <b>{toggle ? "¡Despreocúpate" : "Tukarga es la"}</b>
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "right",
        }}
      >
        <Typography className={changeColor ? "title" : "titleGreen"}>
          <b>{toggle ? "De las entregas," : "primera plataforma"}</b>
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "right",
        }}
      >
        <Typography className={changeColor ? "subtitle" : "subtitleGreen"}>
          {toggle
            ? "Oficios By TuKarga lo hace por ti!"
            : "Tecnológica de servicios logísticos."}
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "right",
        }}
      >
        <Typography className={changeColor ? "text_light" : "text_lightGreen"}>
          {toggle
            ? "Con la ayuda de nuestra red de más de 4000 profesionales,"
            : "¡Con una gama completa de servicios, somos una"}
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "right",
        }}
      >
        <Typography className={changeColor ? "text_light" : "text_lightGreen"}>
          {!toggle
            ? "llevamos tus envíos a tiempo."
            : "solucioń integral para todas las necesidades de su negoció!"}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant={!changeColor ? "outlined" : "contained"}
          style={{
            backgroundColor: !changeColor ? undefined : "#ff6600",
            color: !changeColor ? "#ff6600" : "#fff",
            borderColor: !changeColor ? "#ff6600" : undefined,
            borderRadius: "8px",
            marginTop: "20px",
            fontSize: "12px",
          }}
          onClick={() => setBrand((prev) => !prev)}
        >
          Conocer más
        </Button>
      </Box>
    </>
  );
}
