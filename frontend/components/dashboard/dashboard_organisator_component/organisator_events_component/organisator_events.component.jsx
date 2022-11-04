import React, { useState } from "react";
import EventSquareMin from "../../../assets/DashboardNav/EventSquareMin";
import * as S from "./organisator_events.styled";
import {
  FaPlus,
  FaArrowLeft,
  FaWindowClose,
  FaMoneyBillWave,
  FaTicketAlt,
  FaCalendarCheck,
} from "react-icons/fa";

import { displayEventCreator } from "../../../../store/features/dashboard/dashboard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../components/loader/loader";
import { IoLocationSharp } from "react-icons/io5";

import { globalRequest } from "../../../../utils/validationForm/networkServices/networkServices";
import { setNumberOfEvents } from "../../../../store/features/organisator/organisator";
import { convertTimestampToDateFR } from "../../../../utils/utilsMethods";
import CreateTickets from "../create_tickets_form_component";
import Image from "next/image";
import axios from "axios";

export default function DashBoardEvents() {
  const dispatch = useDispatch();
  const displayCreator = useSelector(
    (state) => state.dashboard.displayCreateEvent
  );
  const [events, setEvents] = useState(undefined);
  const [burnMessage, setBurnMessage] = useState();
  const auth = useSelector((state) => state.jwt.auth);
  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [loader, setLoader] = useState(true);
  const [burnLoader, setBurnLoader] = useState(false);
  const [displayTicketCreator, setDisplayCreator] = useState(false);
  const [burnInput, setBurnInput] = useState(false);
  const [burnFormData, setFormData] = useState({});

  const displayTest = (event) => {
    setFormData({ ...burnFormData, contractAddress: event.contractAddress });
    setSelectedEvent(event);
  };

  const burnTicket = async () => {
    setBurnLoader(true);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}api/burnTicket`, burnFormData)
      .then((res) => {
        if (res.status === 200) {
          setBurnLoader(false);
          setBurnMessage("Ticket supprimé avec succès!");
        } else {
          setBurnLoader(false);
          setBurnMessage("Il y a eu une erreur dans la suppression du billet.");
        }
      })
      .catch((err) => {
        setBurnLoader(false);
        setBurnMessage("Il y a eu une erreur dans la suppression du billet.");
      });
  };

  React.useEffect(() => {
    if (!events) {
      globalRequest("POST", "api/events/all/sort", { organisator_id: auth.id })
        .then((res) => {
          if (res.status === 200) {
            if (res.data.length > 0) {
              setEvents(res.data);
            }

            setLoader(false);
          } else {
            setLoader(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [loader]);

  React.useEffect(() => {
    if (events != undefined) {
      dispatch(setNumberOfEvents(events.length));
    }
  }, [events]);

  return (
    <S.Main>
      {selectedEvent && (
        <div
          style={{
            backgroundColor: "#161618",
            height: "100%",
            position: "absolute",
            width: "100%",
            zIndex: "1",
            backdropFilter: blur("15px"),
          }}
        >
          <S.RowSelectedEvent>
            <S.CloseBtn onClick={() => setSelectedEvent(false)}>
              <FaWindowClose size={25} color="white" />
            </S.CloseBtn>
          </S.RowSelectedEvent>
          {selectedEvent.picture && (
            <S.BgImg style={{ position: "absolute" }}>
              <Image
                style={{
                  boxShadow: "100px 100px 100px 100px #161618 inset",
                }}
                placeholder="empty"
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                    selectedEvent.picture.path !=
                    "empty"
                    ? process.env.NEXT_PUBLIC_API_URL +
                    selectedEvent.picture.path
                    : "/event_placeholder.png"
                }
                layout="fill"
                objectFit="cover"
              />
              <S.transBox />
            </S.BgImg>
          )}

          {!displayTicketCreator ? (
            <S.RowDetail>
              <div style={{ flex: 1, padding: "100px" }}>
                <div>
                  <div style={{ textTransform: "uppercase" }}>
                    <h2>
                      {selectedEvent.name} -{" "}
                      {selectedEvent.categorie.categorie_name}
                    </h2>
                  </div>
                  <div>
                    <p>{selectedEvent.description}</p>
                  </div>

                  <div style={{ alignItems: "center" }}>
                    <IoLocationSharp size={25} /> {selectedEvent.localisation}
                  </div>
                  <div>
                    <p>{convertTimestampToDateFR(selectedEvent.event_date)}</p>
                  </div>
                </div>
                <div style={{ margin: "20px" }}>
                  <S.CreateTicketsButton
                    type="button"
                    onClick={() => setDisplayCreator(!displayTicketCreator)}
                  >
                    <a>Créer des billets pour cet évenement</a>
                  </S.CreateTicketsButton>

                  {!burnInput ? (
                    <S.BurnTicketsButton
                      type="button"
                      onClick={() => setBurnInput(!burnInput)}
                    >
                      <a>Retirer des billets de la vente</a>
                    </S.BurnTicketsButton>
                  ) : (
                    <S.BurnDiv>
                      {!burnLoader ? (
                        <>
                          {burnMessage != null && <a>{burnMessage}</a>}
                          <a>
                            Entrez le numéro du billet à retirer de la vente
                          </a>

                          <S.BurnInput
                            type={"number"}
                            min={1}
                            max={25}
                            onChange={(e) => {
                              setFormData({
                                ...burnFormData,
                                tokenId: e.target.value,
                              });
                            }}
                          />
                          <S.SubmitBurn onClick={burnTicket} type="button">
                            Supprimer le ticket
                          </S.SubmitBurn>

                          <S.BurnDivBack
                            type="button"
                            onClick={() => setBurnInput(!burnInput)}
                          >
                            <FaArrowLeft size={20} color={"white"} />
                          </S.BurnDivBack>
                        </>
                      ) : (
                        <>
                          Supression en cours
                          <Loader />
                        </>
                      )}
                    </S.BurnDiv>
                  )}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                {selectedEvent.picture && (
                  <S.ImgPres
                    style={{
                      position: "absolute",
                      left: "50vw",
                      borderRadius: "20px",
                    }}
                  >
                    <Image
                      placeholder="empty"
                      src={
                        process.env.NEXT_PUBLIC_API_URL +
                          selectedEvent.picture.path !=
                          "empty"
                          ? process.env.NEXT_PUBLIC_API_URL +
                          selectedEvent.picture.path
                          : "/event_placeholder.png"
                      }
                      layout="fill"
                      objectFit="none"
                    />
                  </S.ImgPres>
                )}
              </div>
            </S.RowDetail>
          ) : (
            <>
              <S.GoBackButton
                type="button"
                onClick={() => setDisplayCreator(!displayTicketCreator)}
              >
                <FaArrowLeft size={50} color={"white"} />
              </S.GoBackButton>
              <CreateTickets event={selectedEvent} />
            </>
          )}
        </div>
      )}

      <div style={{ color: "white", fontSize: "2rem" }}>Vos événements</div>
      {loader ? (
        <div style={{ alignItems: "center", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <S.EventsRow>
          {events &&
            events?.map((event, key) => (
              <EventSquareMin
                displayDetail={() => displayTest(event)}
                key={key}
                date={convertTimestampToDateFR(event.event_date)}
                official={event.official}
                description={event.description}
                img={event.picture ? event.picture.path : "empty"}
                name={event.name}
              />
            ))}

          {displayTest}

          <div>
            <S.Row style={{ width: "200px" }}>
              <S.NewEventButton
                onClick={() => {
                  dispatch(displayEventCreator(!displayCreator));
                }}
              >
                <FaPlus size={100} color="white" />
              </S.NewEventButton>
            </S.Row>

            <S.Row style={{ width: "200px", justifyContent: "center" }}>
              <a
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingTop: "5px",
                  fontWeight: 600,
                  marginBlockStart: "1rem",
                }}
              >
                Créer un nouvel événement
              </a>
            </S.Row>
          </div>
        </S.EventsRow>
      )}
    </S.Main>
  );
}
