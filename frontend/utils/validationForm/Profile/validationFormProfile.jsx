import * as Yup from "yup";

export default Yup.object().shape({
  firstname: Yup.string(),
  name: Yup.string(),
  phone: Yup.string(),
  address: Yup.string(),
  wallet_address: Yup.string(),
  avatar: Yup.string(),
});
