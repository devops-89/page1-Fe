import { authenticationController } from "@/api/auth";
import { COLORS } from "@/utils/colors";
import { nunito } from "@/utils/fonts";
import { handleClose, phoneNumberRegex } from "@/utils/regex";
import { loginTextField, phonetextField } from "@/utils/styles";
import { registrationSchema } from "@/utils/validationSchema";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ToastBar from "./toastBar";
import { TOAST_STATUS } from "@/utils/enum";

const RegistrationForm = () => {
  const router = useRouter();

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [phone, setPhone] = useState(null);
  const handlePhoneHandler = (newPhone, countryData) => {
    setPhone(newPhone);
    const validPhone = matchIsValidTel(newPhone);
    if (validPhone) {
      form.values.phone_number = countryData.nationalNumber;
      form.values.country_code = countryData.countryCallingCode;
      form.errors.phone_number = "";
    } else {
      form.errors.phone_number = "Please Enter Valid Phone Number ";
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [loading, setLoading] = useState(false);
  const registerUserApi = (values) => {
    setLoading(true);
    authenticationController
      .registerUser(values)
      .then((res) => {
        console.log("response", res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        setToast({
          ...toast,
          open: true,
          message: errMessage,
          severity: TOAST_STATUS.ERROR,
        });
        setLoading(false);
      });
  };

  const form = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      country_code: "",
      phone_number: "",
      password: "",
      user_type: "USER  ",
    },
    onSubmit: (values) => {
      registerUserApi(values);
    },
    validationSchema: registrationSchema,
  });

  return (
    <div>
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: nunito.style,
            fontWeight: 700,
          }}
        >
          Sign Up
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            textAlign: "center",
            fontFamily: nunito.style,
            fontWeight: 500,
          }}
        >
          Signup to keep exploring amazing destinations around the World.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <form onSubmit={form.handleSubmit}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <TextField
                sx={{ ...loginTextField }}
                fullWidth
                label="FullName*"
                id="full_name"
                onChange={form.handleChange}
                error={form.touched.full_name && Boolean(form.errors.full_name)}
                helperText={form.touched.full_name && form.errors.full_name}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                sx={{ ...loginTextField }}
                fullWidth
                label="Email*"
                id="email"
                onChange={form.handleChange}
                error={form.touched.email && Boolean(form.errors.email)}
                helperText={form.touched.email && form.errors.email}
              />
            </Grid2>
            <Grid2 size={12}>
              <MuiTelInput
                label="Phone Number"
                sx={{ ...phonetextField, width: "100%" }}
                defaultCountry="IN"
                onChange={handlePhoneHandler}
                value={phone}
                id="phone_number"
                error={Boolean(form.errors.phone_number)}
                helperText={form.errors.phone_number}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label="Password*"
                type={showPassword ? "text" : "password"}
                sx={{ ...loginTextField, width: "100%" }}
                id="password"
                onChange={form.handleChange}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? (
                            <VisibilityOutlined htmlColor={COLORS.PRIMARY} />
                          ) : (
                            <VisibilityOffOutlined htmlColor={COLORS.PRIMARY} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                error={form.touched.password && Boolean(form.errors.password)}
                helperText={form.touched.password && form.errors.password}
              />
            </Grid2>
            <Grid2 size={12}>
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  fontSize: 14,

                  p: 1,
                  color: COLORS.WHITE,
                  fontFamily: nunito.style,
                }}
                fullWidth
                type="submit"
              >
                {loading ? (
                  <CircularProgress
                    sx={{ color: COLORS.SECONDARY }}
                    size={25}
                  />
                ) : (
                  "Register"
                )}
              </Button>
            </Grid2>
            <Grid2 size={12}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: nunito.style,
                }}
              >
                Already have an account ?{" "}
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: 14,
                    color: COLORS.SECONDARY,
                    cursor: "pointer",
                  }}
                  onClick={() => router.push("/login")}
                >
                  Sign In
                </Typography>{" "}
              </Typography>
            </Grid2>
          </Grid2>
        </form>
      </Box>
      <ToastBar
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        handleClose={() => handleClose({ toast, setToast })}
      />
    </div>
  );
};

export default RegistrationForm;