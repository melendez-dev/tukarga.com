import ImageClients from "../../../assets/images/Frame 85.png";
import { Box, Typography } from "@material-ui/core";
export default function ThirdSection() {
  return (
    <>
      <Box>
        <Typography className="title">
          Empresas que hacen parte de Oficios
        </Typography>
      </Box>
      <Box>
        <Typography className="subtitle">
          Dedicate a vender, nosotros nos encargamos de entrgar tus envios
        </Typography>
      </Box>
      <Box className="centerImg">
        <img src={ImageClients} />
      </Box>
    </>
  );
}
