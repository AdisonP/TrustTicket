import React from "react";
import SellCountdown from "./SellCountdown/sellCountdown.component";
import {
  DescriptionBox,
  DescriptionText,
  DescriptionTitle,
  Main,
  PriceButton,
  TicketDetailsLittleBox,
  TicketDetailsMainBox,
  TicketDetailsText,
} from "./tickets.styled";
import TicketTileBig from "./TicketTileBig/ticketTileBig";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8080/api/events");
  const data = await res.json();

  const paths = data.map((event) => {
    return {
      params: { id: event.id.toString() },
    };
  });
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:8080/api/events" + id);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      event: data,
    },
  };
};

const DetailsTickets = ({ event }) => {
  return (
    <div style={{ color: "white" }}>
      <h1>{event}</h1>
    </div>
  );
};
export default DetailsTickets;

/* function TicketsDetailsComponent(props) {
  const router = useRouter();
  const { id, comment, date, location, description } = router.query;
  props = {
    ticket: {
      id: 1,
      name: "Ticket 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nihil velit dolore quo quaerat quos minus, molestiae amet quis corporis dolorum distinctio modi neque magni non ipsum eligendi temporibus sit",
      price: "100",
    },
    events: {
      id: 1,
      name: "Event 1",
      city: "Marseille",
      location: "Stade Vélodrome",
      date: "01 Dec 2022",
      hour: "7.00",
      picture: "https://picsum.photos/200/300",
    },
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Comfortaa:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <div style={{ backgroundColor: "red", color: "white" }}>
          {description},{date},{location}
        </div>

        <TicketTileBig />
        <TicketDetailsMainBox>
          <FaRegCalendarAlt size={35} color="#54d2fd" />
          <TicketDetailsLittleBox>
            <TicketDetailsText>{props.events.date} </TicketDetailsText>
            <TicketDetailsText>{props.events.hour}PM</TicketDetailsText>
          </TicketDetailsLittleBox>
          <GoLocation size={35} color="#54d2fd" />
          <TicketDetailsLittleBox>
            <TicketDetailsText>{props.events.location}</TicketDetailsText>
            <TicketDetailsText>{props.events.city}</TicketDetailsText>
          </TicketDetailsLittleBox>
        </TicketDetailsMainBox>
        <SellCountdown date={"07/25/2022 12:59:00"} />
        <PriceButton>BUY {props.ticket.price}€</PriceButton>
        <DescriptionBox>
          <DescriptionTitle>About</DescriptionTitle>
          <DescriptionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nemo dolor odit temporibus reiciendis laborum perferendis tenetur
            laudantium, mollitia rem ipsum eaque id, odio necessitatibus
            repellendus cum quis dolore praesentium.
          </DescriptionText>
        </DescriptionBox>
      </Main>
    </>
  );
} */

/* export default TicketsDetailsComponent;
 */
