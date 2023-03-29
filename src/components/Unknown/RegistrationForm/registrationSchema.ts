import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().required("required"),
  password: Yup.string()
    .min(6, "minimum password length 6 characters")
    .max(22, "maximum password length 22 characters")
    .required("required"),
});

export default loginSchema;
