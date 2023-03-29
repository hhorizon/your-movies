import React, { useState } from "react";
import { useFormik } from "formik";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import validationSchema from "./registrationSchema";
import messages from "./messages";

interface RegistrationFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  btnText: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
  btnText,
}) => {
  const [showPassowrd, setShowPassword] = useState<boolean>(false);
  const intl = useIntl();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      onSubmit={formik.handleSubmit}
    >
      <Box mb={4}>
        <TextField
          label={intl.formatMessage(messages.emailLabel)}
          type="email"
          name="email"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          variant="filled"
          fullWidth
          helperText={formik.errors.email ?? null}
        />
      </Box>

      <Box mb={4}>
        <TextField
          label={intl.formatMessage(messages.passwordLable)}
          type={showPassowrd ? "text" : "password"}
          name="password"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          variant="filled"
          fullWidth
          helperText={formik.errors.password ?? null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassowrd)}>
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box m="0 auto">
        <Button type="submit" variant="contained">
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
