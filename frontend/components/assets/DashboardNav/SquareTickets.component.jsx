import React from "react";
import * as S from "../../dashboard/dashboard_user_component/dashboard_user.styled";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as utils from "../../../utils/utilsMethods";

export default function SquareTickets({
  setDisplayDetails,
  ticketDetails,
  name,
  img,
  ticketId,
}) {
  const date = utils.convertTimestampToDateFR(
    ticketDetails.eventDetail.event_date
  );
  const hour = utils.convertTimestampToHour(
    ticketDetails.eventDetail.event_date
  );

  return (
    <S.Card onClick={() => setDisplayDetails(ticketDetails, ticketId)}>
      <div style={{ alignSelf: "center" }}>
        <Image
          style={{
            borderRadius: "30px 30px 0 0",
            backgroundColor: "#ffffffe6",
          }}
          placeholder="empty"
          src={img != "empty" ? img : "/event_placeholder.png"}
          width={"400vw"}
          height={"300px"}
        />
      </div>

      <S.Details>
        <S.Row1>
          <S.Header1>{ticketDetails.name}</S.Header1>
        </S.Row1>

        <S.Row1>
          <h4 style={{ fontSize: "1rem", color: "#A69697", margin: 0 }}>
            {ticketDetails.eventDetail.name}
          </h4>
        </S.Row1>

        <S.Row1>
          <div>
            <h4 style={{ fontSize: "1rem", color: "#A69697", margin: 0 }}>
              Lieu
            </h4>
            <span>{ticketDetails.eventDetail.localisation}</span>
          </div>
        </S.Row1>
        <S.Row1>
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: "1rem", color: "#A69697", margin: 0 }}>
              Date
            </h5>
            <span>{date}</span>
          </div>
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: "1rem", color: "#A69697", margin: 0 }}>
              Heure
            </h5>
            <span>{hour}</span>
          </div>
        </S.Row1>
        <S.Row1>
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: "1rem", color: "#A69697", margin: 0 }}>
              Numéro de billet
            </h5>
            <span>{ticketDetails.ticketCode}</span>
          </div>
        </S.Row1>
      </S.Details>
    </S.Card>
  );
}
