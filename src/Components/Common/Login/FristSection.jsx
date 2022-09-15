import { useLocation, useNavigate } from "react-router-dom";
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
import { ReactComponent as ForgetIlustration } from "../../../assets/svg/Group 84.svg";

import FormLogin from "../../../Atom/Login/Form";

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
  const navigate = useNavigate();
  const isMobile = useContext(MobileContext);
  const { brand } = useContext(BrandContext);

  const [forgetPass, setForgetPass] = useState(0);

  const register = () => {
    navigate("/companies");
    setTimeout(() => {
      const part = document.querySelector(`#information`);
      part.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
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
              <Typography className="title">
                {forgetPass === 0
                  ? "Inicia sesión"
                  : forgetPass === 1
                  ? "Recuperar contraseña"
                  : forgetPass === 3
                  ? "Registro"
                  : ""}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography className="subtitle">
                {forgetPass === 0 ? (
                  <span>Selecciona el tipo de usuario para iniciar sesión</span>
                ) : forgetPass === 1 ? (
                  <span>Ingresa el correo electrónico registrado</span>
                ) : (
                  ""
                )}
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
          <FormLogin
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
            errors={errors}
          />
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
                  {forgetPass !== 0 ? (
                    <ForgetIlustration />
                  ) : brand ? (
                    <Transporte />
                  ) : (
                    <MensajeriaM />
                  )}
                </Box>
                {brand & (forgetPass === 0) ? (
                  <Box className="FlexCenter">
                    <Typography className="transporteText">
                      Si perteneces a una <b>empresa de transporte</b> y quieres
                      optimizar su capacidad instalada
                    </Typography>
                  </Box>
                ) : (
                  <></>
                )}
                <FormLogin
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  control={control}
                  brand={brand}
                  register={register}
                  errors={errors}
                  setForgetPass={setForgetPass}
                  forgetPass={forgetPass}
                />
              </Box>
            )}
            {selectSvg === 2 && (
              <Box className="marginTopMobil ">
                <Box className="FlexCenter">
                  {brand ? <Carga /> : <DomiciliosM />}
                </Box>
                {brand && forgetPass === 0 ? (
                  <Box className="FlexCenter">
                    <Typography className="transporteText">
                      Si su empresa <b>requiere transportar</b> sus materias
                      primas o sus productos terminados
                    </Typography>
                  </Box>
                ) : (
                  <></>
                )}
                <FormLogin
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  control={control}
                  register={register}
                  errors={errors}
                  brand={brand}
                  setForgetPass={setForgetPass}
                  forgetPass={forgetPass}
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </FirstSectionStyled>
  );
}
