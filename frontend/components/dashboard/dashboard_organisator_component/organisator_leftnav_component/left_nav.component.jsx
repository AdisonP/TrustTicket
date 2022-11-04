import React, { useState } from "react";
import { Icon } from "@iconify/react";

import { NavBtn, RowColumn, Label } from "./left_navDashboard.styled";
import { useDispatch, useSelector } from "react-redux";
import { displayEventCreator } from "../../../../store/features/dashboard/dashboard";

export default function DashboardLeftNav() {
  const dispatch = useDispatch()
  const displayCreator = useSelector((state) => state.dashboard.displayCreateEvent)

  return (
    <>
      <RowColumn>
        <NavBtn onClick={() => { dispatch(displayEventCreator(!displayCreator)) }}>
          <Icon
            style={{ paddingLeft: "5px", color: "white" }}
            fontSize={"45px"}
            icon="clarity:note-edit-line"
          />
          <Label>Create a new event !</Label>
        </NavBtn>
        <NavBtn>
          <Icon
            style={{ paddingLeft: "5px", color: "white" }}
            fontSize={"45px"}
            icon="entypo:wallet"
          />
        </NavBtn>
        <NavBtn>
          <Icon
            style={{ paddingLeft: "5px", color: "white" }}
            fontSize={"45px"}
            icon="cil:home"
          />
        </NavBtn>
      </RowColumn>
    </>
  );
}
