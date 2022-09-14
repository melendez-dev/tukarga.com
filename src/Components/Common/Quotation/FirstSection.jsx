import {
  Grid,
  Typography,
  Container,
  TextField,
  Box,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { FirstSectionStyled } from "../../../styles/Quotation/FirstSection.styled";
// Controller
import { useForm, Controller } from "react-hook-form";
export default function Quotation() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (json) => {
    console.log(json);
  };
  return (
    <>
      <FirstSectionStyled>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Typography className="title">Cotiza tu envío</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography className="subtitle">
                  ¿Donde recogemos el paquete?
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} style={{ marginTop: "16px" }}>
                <Controller
                  name="address"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      label="Dirección"
                      fullWidth
                      size="small"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.address && (
                  <FormHelperText error>
                    {errors.address.message}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} className="marginTop">
                <Controller
                  name="contact"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      label="Contacto"
                      size="small"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.contact && (
                  <FormHelperText error>
                    {errors.contact.message}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} className="marginTop">
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      label="N° Teléfono"
                      size="small"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.phone && (
                  <FormHelperText error>{errors.phone.message}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} className="marginTop">
                <Controller
                  name="desc"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      label="Instrucciones"
                      size="small"
                      multiline
                      maxRows={4}
                      minRows={4}
                      fullWidth
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.phone && (
                  <FormHelperText error>{errors.phone.message}</FormHelperText>
                )}
              </Grid>
            </Grid>
          </form>
          <Box className="marginTopButton">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  style={{
                    height: "32px",
                    border: "1px solid #D74723",
                    borderRadius: "8px",
                  }}
                >
                  <span className="buttonCancel">Cancelar</span>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    height: "32px",
                    background: "#FF6600",
                    borderRadius: "8px",
                  }}
                >
									<span className="buttonNext">Siguiente</span>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </FirstSectionStyled>
    </>
  );
}
