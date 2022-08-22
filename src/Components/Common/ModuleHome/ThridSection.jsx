import { Box, Container, Typography } from "@material-ui/core";
import ImageClients from "../../../assets/images/Frame 85.png";
// styles
import { ThridSectionStyled } from "../../../styles/ModuleHome/ThridSection.styled";
export default function ThridSection() {
  return (
    <ThridSectionStyled>
      <Container>
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
      </Container>
    </ThridSectionStyled>
  );
}
