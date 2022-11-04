import { DateDiv } from "./Date.styled";
import { convertTimestampToDateFR } from "../../../utils/utilsMethods";
import { IoCalendarOutline } from "react-icons/io5";
export default function Date({ official }) {
  return (
    <DateDiv>
      <IoCalendarOutline size={20} color="white" style={{ marginRight: "5px" }} />

      {convertTimestampToDateFR(official)}
    </DateDiv>
  );
}
