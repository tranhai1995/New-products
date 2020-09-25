import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().required().min(6).max(12).label("Password"),
  confirmPassword: yup.string().required().min(6).max(12).label("Password"),
  phoneNumber: yup.number().required().label("Phone"),
});
