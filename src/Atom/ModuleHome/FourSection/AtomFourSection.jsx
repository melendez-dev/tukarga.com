import { useState } from "react";
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
import { documentTypes } from "../../../utils/mics";

// ButtonSelectForm
import ButtonSelectForm from "../../../Components/Shared/Button/ButtonSelectForm";

// icons
import { ReactComponent as Truck } from "../../../assets/svg/ico_truckform.svg";
import { ReactComponent as Car } from "../../../assets/svg/ico_car-02form.svg";
import { ReactComponent as Motorcycle } from "../../../assets/svg/ico_motorcyclefomr.svg";

export default function AtomFourSection({ title, subtitle, buttonText, type }) {
  const [selected, setSelected] = useState(1);
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
                {!type ? (
                  <>
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
                  </>
                ) : (
                  <Grid container>
                    <Grid item xs={12}>
                      <Controller
                        control={control}
                        name="name"
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            className="marginTop"
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
                    <Grid item xs={4}>
                      <Controller
                        name="type_document"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        }}
                        render={({ field }) => (
                          <FormControl
                            variant="outlined"
                            fullWidth
                            size="small"
                            className="marginTop"
                          >
                            <InputLabel id="select">Tipo</InputLabel>
                            <Select
                              {...field}
                              disabled={false}
                              labelId="select"
                              label="Tipo"
                              onChange={(e) => field.onChange(e.target.value)}
                            >
                              {documentTypes?.map((item, index) => (
                                <MenuItem value={item.id} key={index}>
                                  {item.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      />
                      {errors?.type_document && (
                        <FormHelperText error>
                          {errors?.type_document?.message}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={8}>
                      <Controller
                        name="document_number"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                          pattern: {
                            value: /^[0-9]{8}$/,
                            message:
                              "El número de documento debe tener 8 dígitos",
                          },

                          maxLength: {
                            value: 20,
                            message: "Máximo 20 caracteres",
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            label="Número de documento"
                            variant="outlined"
                            fullWidth
                            className="marginTop"
                            error={errors?.document_number?.value}
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                            style={{ paddingLeft: "10px" }}
                          />
                        )}
                      />
                      {errors?.document_number && (
                        <FormHelperText error>
                          {errors?.document_number?.message}
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
                      <Box>
                        <Typography
                          style={{
                            fontSize: "12x",
                            fontWeight: "500",
                            color: "#3c3c3b",
                            margin: "20px 0px",
                          }}
                        >
                          Tipo de vehículo
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "233px",
                        }}
                      >
                        <ButtonSelectForm
                          icon={<Motorcycle />}
                          selected={selected}
                          id={1}
                          setSelected={setSelected}
                        />
                        <ButtonSelectForm
                          icon={<Car />}
                          selected={selected}
                          id={2}
                          setSelected={setSelected}
                        />
                        <ButtonSelectForm
                          icon={<Truck />}
                          selected={selected}
                          id={3}
                          setSelected={setSelected}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                )}
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
