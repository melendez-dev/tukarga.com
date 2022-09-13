import {
  Box,
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { ReactComponent as Domicilios } from "../../../assets/svg/Domicilios.svg";
import { ReactComponent as Mensajeria } from "../../../assets/svg/Mensajeria.svg";
// styles
import { FirstSectionStyled } from "../../../styles/Login/FristSection.styled";
// controller
import { useForm, Controller } from "react-hook-form";
export default function FirstSection({ toggleLogin }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // onSubmit
  const onSubmit = (json) => {
    console.log(json);
  };
  return (
    <FirstSectionStyled>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Typography className="title">Iniciar Sesión</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography className="subtitle">
                Selecciona el tipo de usuario para iniciar sesión
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="flexEnd">
              <Mensajeria />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Domicilios />
            </Box>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container style={{marginTop: "30px"}}>
            <Grid item xs={12} className="centerForm">
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                }}
                defaultValue=""
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    name="email"
                    size="small"
                    label="Correo electrónico"
                    variant="outlined"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
              {errors?.email && (
                <FormHelperText error>{errors?.email?.message}</FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} className="centerForm">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    name="email"
                    size="small"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
              {errors?.password && (
                <FormHelperText error>
                  {errors?.password?.message}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} className="centerForm">
              <Button type="submit">Ingresar</Button>
            </Grid>
            <Grid item xs={12} className="centerForm">
              <Typography>Olvide mi contraseña</Typography>
            </Grid>
            <Grid item xs={12} className="centerForm">
              <Typography>
                ¿No tienes una cuenta? <b>Registrame</b>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </FirstSectionStyled>
  );
}
