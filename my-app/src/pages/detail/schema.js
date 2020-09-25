import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required().label("Name"),
  password: yup.string().required().min(3).max(12).label("Password"),
});
