import { ThirdSectionStyled } from "../../../styles/ModuleCompanies/ThirdSection.styled";
import {
  Container,
  Box,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_15324578.svg";
import CardIcon from "../../Shared/Card/CardHomeFirstSec";
export default function ThirdSection({ data }) {
  const isMobil = useMediaQuery("(max-width:930px)");
  return (
    <>
      <ThirdSectionStyled>
        <Container>
          <Grid container spacing={3}>
            {!isMobil && (
              <Grid item xs={12} md={6}>
                <Box>
                  <Ilustration
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <Box>
                <Box>
                  <Typography className="title">Servicios</Typography>
                </Box>
                <Grid container spacing={3}>
                  {data.map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <CardIcon
                        icon={item?.icon}
                        title={item?.title}
                        text={item?.text}
                        fullWidth={item?.fullWidth}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThirdSectionStyled>
    </>
  );
}
