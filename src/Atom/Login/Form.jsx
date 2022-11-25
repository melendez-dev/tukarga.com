import { Controller } from "react-hook-form";
import {
  Grid,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@material-ui/core";
export default function FormLogin({
  handleSubmit,
  onSubmit,
  control,
  register,
  brand,
  errors,
  setForgetPass,
  forgetPass,
}) {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container style={{ marginTop: "30px" }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              }}
              defaultValue=""
              control={control}
              name="USERNAME"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Correo electrónico"
                  variant="outlined"
                  error={errors.USERNAME}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </Grid>
          {forgetPass !== 1 && (
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Controller
                name="PASSWORD"
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
                    name="password"
                    size="small"
                    label="Contraseña"
                    type="password"
                    style={{
                      marginTop: "10px",
                    }}
                    error={errors.PASSWORD}
                    variant="outlined"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </Grid>
          )}
          {forgetPass == 3 && (
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Controller
                name="repeatPassword"
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
                    size="small"
                    label="Repetir contraseña"
                    type="password"
                    style={{
                      marginTop: "10px",
                    }}
                    variant="outlined"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
              {errors?.repeatPassword && (
                <FormHelperText error>
                  {errors?.repeatPassword?.message}
                </FormHelperText>
              )}
            </Grid>
          )}

          <Grid item xs={12} className="centerForm">
            <Button
              type="submit"
              style={{
                padding: "4px 16px 6px",
                width: "272px",
                height: "32px",
                /* Orange_karga */
                background: " #FF6600",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              {forgetPass === 0 ? (
                <span>Ingresar</span>
              ) : forgetPass === 1 ? (
                <span>Recuperar</span>
              ) : (
                <span>Registrarse</span>
              )}
            </Button>
          </Grid>
          <Grid item xs={12} className="centerForm">
            <Typography className="forgetPass">
              {forgetPass === 0 ? (
                <span onClick={() => setForgetPass(1)}>
                  Olvidé mi contraseña
                </span>
              ) : forgetPass === 1 ? (
                <span onClick={() => setForgetPass(0)}>Iniciar Sesión</span>
              ) : (
                <></>
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} className="centerForm">
            <Typography className="createAcount">
              {forgetPass === 3 ? (
                <span>Tengo una cuenta</span>
              ) : (
                <>¿No tienes una cuenta? </>
              )}

              <span
                style={{ marginLeft: "8px" }}
                onClick={() => {
                  brand ? setForgetPass(forgetPass === 3 ? 1 : 3) : register();
                }}
              >
                {forgetPass === 3 ? (
                  <>
                    <b>Iniciar Sesión</b>
                  </>
                ) : (
                  <>
                    <a style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "black"
                      }} 
                      href="https://admin.tukarga.com/"
                      >Registrarme</a>

                  </>
                )}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
