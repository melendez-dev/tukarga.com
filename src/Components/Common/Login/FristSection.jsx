import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
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
import { ReactComponent as Domicilios2 } from "../../../assets/svg/Domicilios2.svg";
import { ReactComponent as Mensajeria2 } from "../../../assets/svg/Mensajeria2.svg";
import { ReactComponent as MensajeriaM } from "../../../assets/svg/MensajeriaM.svg";
import { ReactComponent as DomiciliosM } from "../../../assets/svg/DomiciliosM.svg";

// svg tukarga
import { ReactComponent as Carga } from "../../../assets/svg/Carga.svg";
import { ReactComponent as Transporte } from "../../../assets/svg/Transporte.svg";

// context
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext";

// styles
import { FirstSectionStyled } from "../../../styles/Login/FristSection.styled";
// controller
import { useForm, Controller } from "react-hook-form";
export default function FirstSection({ toggleLogin = false, setToggleLogin }) {
  const { state } = useLocation();
  const isMobile = useContext(MobileContext);
  const { brand } = useContext(BrandContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [selectSvg, setSelectSvg] = useState(state ? state?.id : 0);

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
          {!isMobile && (
            <>
              <Grid item xs={6}>
                <Box
                  onClick={() => setToggleLogin(false)}
                  className={isMobile ? undefined : "pointer flexEnd"}
                >
                  {!toggleLogin ? (
                    <Mensajeria
                      style={{
                        width: isMobile ? "109px" : "174px",
                      }}
                    />
                  ) : (
                    <Mensajeria2
                      style={{
                        width: isMobile ? "109px" : "174px",
                      }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className=" pointer" onClick={() => setToggleLogin(true)}>
                  {!toggleLogin ? (
                    <Domicilios
                      style={{
                        width: isMobile ? "109px" : "174px",
                      }}
                    />
                  ) : (
                    <Domicilios2
                      style={{
                        width: isMobile ? "109px" : "174px",
                      }}
                    />
                  )}
                </Box>
              </Grid>
            </>
          )}
        </Grid>
        {!isMobile && (
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
                  name="email"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      name="email"
                      size="small"
                      label="Correo electrónico"
                      variant="outlined"
                      style={{
                        width: "272px",
                      }}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors?.email && (
                  <FormHelperText error>
                    {errors?.email?.message}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
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
                      style={{
                        width: "272px",
                        marginTop: "10px",
                      }}
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
                  Ingresar
                </Button>
              </Grid>
              <Grid item xs={12} className="centerForm">
                <Typography className="forgetPass">
                  Olvide mi contraseña
                </Typography>
              </Grid>
              <Grid item xs={12} className="centerForm">
                <Typography className="createAcount">
                  ¿No tienes una cuenta?{" "}
                  <span style={{ marginLeft: "8px" }}>
                    <b>Registrame</b>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
        {/*Mobile*/}
        {isMobile && (
          <>
            {selectSvg === 0 && (
              <Box className="marginTopMobil" style={{ marginBottom: "200px" }}>
                <Grid container>
                  <Grid item xs={6}>
                    <Box onClick={() => setSelectSvg(1)} className="pointer">
                      {brand ? <Transporte /> : <MensajeriaM />}
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box onClick={() => setSelectSvg(2)} className="pointer">
                      {brand ? <Carga /> : <DomiciliosM />}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
            {selectSvg === 1 && (
              <Box className="marginTopMobil ">
                <Box className="FlexCenter">
                  {brand ? <Transporte /> : <MensajeriaM />}
                </Box>
                {brand && (
                  <Box className="FlexCenter">
                    <Typography className="transporteText">
                      Si perteneces a una <b>empresa de transporte</b> y quieres
                      optimizar su capacidad instalada
                    </Typography>
                  </Box>
                )}

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
                        <FormHelperText error>
                          {errors?.email?.message}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
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
                            style={{
                              marginTop: "10px",
                            }}
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
                        Ingresar
                      </Button>
                    </Grid>
                    <Grid item xs={12} className="centerForm">
                      <Typography className="forgetPass">
                        Olvide mi contraseña
                      </Typography>
                    </Grid>
                    <Grid item xs={12} className="centerForm">
                      <Typography className="createAcount">
                        ¿No tienes una cuenta?{" "}
                        <span style={{ marginLeft: "8px" }}>
                          <b>Registrame</b>
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            )}
            {selectSvg === 2 && (
              <Box className="marginTopMobil ">
                <Box className="FlexCenter">
                  {brand ? <Carga /> : <DomiciliosM />}
                </Box>
                {brand && (
                  <Box className="FlexCenter">
                    <Typography className="transporteText">
                      Si su empresa <b>requiere transportar</b> sus materias
                      primas o sus productos terminados
                    </Typography>
                  </Box>
                )}
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
                        <FormHelperText error>
                          {errors?.email?.message}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
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
                            style={{
                              marginTop: "10px",
                            }}
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
                        Ingresar
                      </Button>
                    </Grid>
                    <Grid item xs={12} className="centerForm">
                      <Typography className="forgetPass">
                        Olvide mi contraseña
                      </Typography>
                    </Grid>
                    <Grid item xs={12} className="centerForm">
                      <Typography className="createAcount">
                        ¿No tienes una cuenta?{" "}
                        <span style={{ marginLeft: "8px" }}>
                          <b>Registrame</b>
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            )}
          </>
        )}
      </Container>
    </FirstSectionStyled>
  );
}
