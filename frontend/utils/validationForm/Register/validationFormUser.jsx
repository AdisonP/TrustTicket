import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string(),
  username: Yup.string(),
  address: Yup.string(),
  token: Yup.string(),
  firstname: Yup.string(),
  password: Yup.string().min(8),
  email: Yup.string().email(),
  phone: Yup.string(),
  wallet_address: Yup.string()
});
