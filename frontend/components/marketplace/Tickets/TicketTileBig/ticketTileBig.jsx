import React from "react";
import { BigTile } from "./ticketTileBig.styled";

function TicketTileBig({props}) {
  return (
    <BigTile
      style={{
        backgroundImage:
          process.env.NEXT_PUBLIC_API_URL + props != "empty"
            ? process.env.NEXT_PUBLIC_API_URL + props
            : "/event_placeholder.png",
      }}
    />
  );
}

export default TicketTileBig;
