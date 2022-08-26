import {
  Box,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@material-ui/core";
// icon
import { ReactComponent as Icon } from "../../../assets/svg/ico_box.svg";
import { ReactComponent as Ilustration } from "../../../assets/svg/Frame 1557.svg";

// react-hook-form
import { useForm, Controller } from "react-hook-form";

export default function AtomFourSection({ title, subtitle, buttonText }) {
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box
            style={{
              padding: "0px 73px",
            }}
          >
            <Box>
              <Typography className="title">{title}</Typography>
            </Box>
            <Box>
              <Typography className="subtitle">{subtitle}</Typography>
            </Box>
            {/*FORM*/}
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    }}
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Nombre o razón social"
                        variant="outlined"
                        fullWidth
                        error={errors?.name?.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                  />
                  {errors?.name && (
                    <FormHelperText error>
                      {errors?.name?.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    }}
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Ciudad"
                        variant="outlined"
                        size="small"
                        className="marginTop"
                        fullWidth
                        error={errors?.city?.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                  />
                  {errors?.city && (
                    <FormHelperText error>
                      {errors?.city?.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      // pattern email
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Ingresa un correo válido",
                      },
                    }}
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        className="marginTop"
                        error={errors?.email?.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                  />
                  {errors?.email && (
                    <FormHelperText error>
                      {errors?.email?.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      // pattern phone
                      pattern: {
                        value: /^[0-9]{10}$/i,
                        message: "Ingresa un número de teléfono válido",
                      },
                    }}
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        error={errors?.phone?.value}
                        className="marginTop"
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                  />
                  {errors?.phone && (
                    <FormHelperText error>
                      {errors?.phone?.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    }}
                    control={control}
                    name="weight"
                    defaultValue={""}
                    render={({ field }) => (
                      <FormControl
                        variant="outlined"
                        fullWidth
                        size="small"
                        className="marginTop"
                      >
                        <InputLabel id="select">
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                            }}
                          >
                            <div>
                              <Icon />
                            </div>
                            <div style={{ marginLeft: "8px" }}>
                              <b>{"Volumen mensual"}</b>
                            </div>
                          </Box>
                        </InputLabel>
                        <Select
                          {...field}
                          disabled={false}
                          labelId="select"
                          label="Icon Volumen mensual"
                          onChange={(e) => field.onChange(e.target.value)}
                        >
                          <MenuItem value={1}>100</MenuItem>
                          <MenuItem value={2}>300</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                  {errors?.weight && (
                    <FormHelperText error>
                      {errors?.weight?.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      // max length
                      maxLength: {
                        value: 500,
                        message: "Máximo 500 caracteres",
                      },
                    }}
                    control={control}
                    name="description"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Tu mensaje"
                        variant="outlined"
                        fullWidth
                        error={errors?.description?.value}
                        className="marginTop"
                        multiline
                        maxRows={10}
                        minRows={7}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                  />
                  {errors?.description && (
                    <FormHelperText error>
                      {errors?.description?.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    style={{
                      marginTop: "20px",
                      width: "176px",
                      height: "32px",
                      background: "#FF6600",
                      color: "#fff",
                      fontSize: "14px",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    {buttonText}
                  </Button>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="centerImage">
            <Ilustration />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
