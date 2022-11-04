import React, { useState } from "react";
import DashboardRightCTA from "../DashboardNav/DashboardNavRightCTA";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  SelectedButton,
  Col2,
  Col5,
  Row,
  Img,
  ButtonSearch,
} from "./Dashboard_topnav.styled";
function dashboard_topnav() {
  const [isFocus, setIsFocus] = useState("All");

  return (
    <>
      <Row>
        <Col5>
          <Link href='/marketplace' style={{
            "&:hover": {
              cursor: "pointer"
            }
          }}>
            <Img src="tt.png" alt="" />
          </Link>
        </Col5>
        <Col2>
        </Col2>
        <Col5>
          <DashboardRightCTA />
        </Col5>
      </Row>
    </>
  );
}



export default dashboard_topnav;
