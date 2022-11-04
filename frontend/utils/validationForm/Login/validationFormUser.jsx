import * as Yup from "yup";

export default Yup.object().shape({
  username: Yup.string(),
  password: Yup.string(),
});
