import { LocalisationDiv } from "./Localisation.styled";
import { MdOutlinePlace } from "react-icons/md";
export default function Localisation({ official }) {
  return (
    <LocalisationDiv>
      <MdOutlinePlace style={{ marginRight: "5px" }} size={20} color="white" />
      {official}
    </LocalisationDiv>
  );
}
