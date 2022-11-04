import CreateEvent from "./create_event_form_component/create_event_form.component";
import React, { useState } from "react";
import DashboardEvents from "./organisator_events_component";
import DashboardStats from "./organisator_stats_component";
import DashboardLeftNav from "./organisator_leftnav_component/index";
import * as GenericStyle from "../../../styles/generic_components.styled";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./dashboard_organisator.styled";
import { FaArrowLeft } from "react-icons/fa";
import { displayEventCreator } from "../../../store/features/dashboard/dashboard";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function OrganisatorDashBoard() {
  //Check if event creator is displayed in redux store
  const displayCreator = useSelector(
    (state) => state.dashboard.displayCreateEvent
  );

  return (
    <>
      {displayCreator && (
        <>
          <div
            style={{
              fontSize: "2rem",
              color: "white",
              margin: "50px 20px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "1px solid white",
              fontFamily: "Comfortaa",
            }}
          >
            Bienvenue dans votre créateur d'événement !
          </div>

          <CreateEvent />
        </>
      )}

      {!displayCreator && (
        <S.Main>
          <GenericStyle.Col10 style={{ position: "relative" }}>
            <DashboardEvents />

            <DashboardStats />
          </GenericStyle.Col10>
        </S.Main>
      )}
    </>
  );
}
