import { useState } from "react";

// IMPORT COMPONENTS
import {
  UserTicket,
  UserTicketTitle,
  UserTicketDetails,
  UserTicketDetailsTop,
  UserTicketDetailsBottom,
  UserTicketsDetailsText,
  UserTicketsDetailsTextRight,
  UserTicketsDetailsTextLeft,
} from "./dashboard_user_tickets.styled";

// IMPORT ANT ICONS
import { CalendarOutlined } from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdPricetags } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import TicketDetail from "./owned_ticket_detail_component/ticket_detail_component/ticket_detail.component";

export default function DashboardUserTickets() {
  const data = [
    {
      id: "1",
      title: "Ticket 1",
      price: "10",
      date: "2020-01-01",
      time: "7:00 pm",
      place: "Stade Vélodrome",
      city: "Marseille",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "/julnft.jpeg",
    },
    {
      id: "2",
      title: "Ticket 2",
      price: "10",
      date: "2023-01-01",
      time: "7:00 pm",
      place: "Stade Vélodrome",
      city: "Marseille",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "/julnft.jpeg",
    },
    {
      id: "3",
      title: "Ticket 3",
      price: "10",
      date: "2023-01-04",
      time: "7:00 pm",
      place: "Stade Vélodrome",
      city: "Marseille",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "/julnft.jpeg",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <UserTicket>
      <UserTicketTitle>Mes Tickets</UserTicketTitle>
      <div className="user-dashboard-tickets-div">
        {data.map((ticket) => (
          <UserTicketDetails onClick={() => setIsOpen(true)} key={ticket.id}>
            <UserTicketDetailsTop
              style={{ backgroundImage: `url(${ticket.image})` }}
            />
            <UserTicketDetailsBottom>
              <UserTicketsDetailsTextLeft>
                <UserTicketsDetailsText>
                  <CalendarOutlined style={{ marginRight: "5px" }} />
                  {` ${ticket.date}`} | {ticket.time}
                </UserTicketsDetailsText>
                <UserTicketsDetailsText>
                  <FaCity style={{ marginRight: "5px" }} />
                  {ticket.city}
                </UserTicketsDetailsText>
              </UserTicketsDetailsTextLeft>
              <UserTicketsDetailsTextRight>
                <UserTicketsDetailsText>
                  <IoMdPricetags style={{ marginRight: "5px" }} />{" "}
                  {ticket.price}€
                </UserTicketsDetailsText>
                <UserTicketsDetailsText>
                  <HiLocationMarker
                    style={{ marginRight: "5px" }}
                    color="#54D2FD"
                  />
                  {ticket.place}
                </UserTicketsDetailsText>
              </UserTicketsDetailsTextRight>
            </UserTicketDetailsBottom>
          </UserTicketDetails>
        ))}
        {isOpen && <TicketDetail setIsOpen={setIsOpen} />}
      </div>
    </UserTicket>
  );
}
