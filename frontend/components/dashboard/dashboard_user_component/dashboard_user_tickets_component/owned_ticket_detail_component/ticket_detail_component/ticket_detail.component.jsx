// IMPORT COMPONENTS
import {
  TicketModal,
  TicketModalClose,
  TicketModalContent,
  TicketModalBottom,
  TicketModalContentLayer,
  TicketModalContentTitle,
  TicketModalContentSubTitle,
  TicketModalBottomLayer,
  TicketModalContentResellBtn,
  TicketModalQR,
  TicketModalQrBottomLayer,
  TicketModalContentResellPrice,
} from "./ticket_detail.styled";
// IMPORT ICONS
import { FcApproval, FcCancel } from "react-icons/fc";
import Image from "next/image";
import { ethers } from "ethers";
import * as contractJSON from "../../../../../../../back/artifacts/contracts/TrustTicketsMarketplace.sol/TrustTicketMarketplace.json";

import * as utils from "../../../../../../utils/utilsMethods";
// IMPORT ICONS
import { AiOutlineCloseCircle } from "react-icons/ai";
import QRCode from "react-qr-code";
import { Loader } from "../../../../../loader/loader_styled";
import { useState } from "react";

export default function TicketDetail({
  setDisplayDetails,
  ticketDetails,
  ticketId,
}) {
  const [loader, setLoader] = useState(false);
  const [txStatus, setTxStatus] = useState(0);
  const verifDetails = {
    tokenId: ticketId.tokenId,
    contractAddress: ticketDetails.eventDetail.contractAddress,
    date: utils.convertTimestampToDateFR(ticketDetails.eventDetail.event_date),
    eventDetails: {
      name: ticketDetails.eventDetail.name,
      location: ticketDetails.eventDetail.localisation,
    },
    ticketCode: ticketDetails.ticketCode,
  };
  const sellTicket = async (ticket) => {
    setLoader(true);
    setTxStatus(1);
    var init = false;
    //L'utilisateur doit signer la transaction donc on utilise Web3Provider
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = web3Provider.getSigner();
    const contract = new ethers.Contract(
      ticketDetails.eventDetail.contractAddress,
      contractJSON.abi,
      signer
    );
    const price = ethers.utils.parseUnits(
      ticketDetails.price.toString(),
      "wei"
    );
    const transaction = await contract
      .resellTicket(
        ticketId.tokenId,
        price,
        // ticketDetails.eventDetail.organisatorWallet,
        {
          value: price,
          gasLimit: 350000,
        }
      )
      .catch((err) => {
        setLoader(false);
        setTxStatus(3);
        console.log(err);
        setTimeout(() => {
          setTxStatus(0);
        }, 2000);
      });

    await transaction
      .wait()
      .then(() => {
        setLoader(false);
        setTxStatus(2);
      })
      .catch((err) => {
        setLoader(false);
        setTxStatus(3);
        setTimeout(() => {
          setTxStatus(0);
        }, 2000);
        console.log(err);
      });
  };
  return (
    <>
      <TicketModal>
        <TicketModalClose>
          <AiOutlineCloseCircle
            color="white"
            size={60}
            onClick={() => setDisplayDetails(false)}
          />
        </TicketModalClose>

        <TicketModalContent>
          <Image
            style={{
              borderRadius: "40px 0 0 0",
              backgroundColor: "#ffffffe6",
            }}
            placeholder="empty"
            src={
              ticketDetails.image != "empty"
                ? ticketDetails.image
                : "/event_placeholder.png"
            }
            width={"100vw"}
            height={"200vh"}
            layout="responsive"
          />
          <TicketModalBottom>
            <TicketModalContentSubTitle>
              {ticketDetails.eventDetail.name}
            </TicketModalContentSubTitle>
            <TicketModalBottomLayer>
              <TicketModalContentTitle>

                Lieu de l'événement
              </TicketModalContentTitle>
              <TicketModalContentSubTitle>
                {ticketDetails.eventDetail.localisation}
              </TicketModalContentSubTitle>
            </TicketModalBottomLayer>
            <TicketModalContentLayer>
              <TicketModalBottomLayer>
                <TicketModalContentTitle>Date</TicketModalContentTitle>
                <TicketModalContentSubTitle>
                  {utils.convertTimestampToDateFR(
                    ticketDetails.eventDetail.event_date
                  )}
                </TicketModalContentSubTitle>
              </TicketModalBottomLayer>
              <TicketModalBottomLayer>
                <TicketModalContentTitle>
                  Heure d'ouverture
                </TicketModalContentTitle>
                <TicketModalContentSubTitle>
                  {utils.convertTimestampToHour(
                    ticketDetails.eventDetail.event_date
                  )}
                </TicketModalContentSubTitle>
              </TicketModalBottomLayer>
            </TicketModalContentLayer>
            <TicketModalContentLayer>
              <TicketModalBottomLayer>
                <TicketModalContentTitle>Prix d'achat</TicketModalContentTitle>
                <TicketModalContentSubTitle>
                  {ticketDetails.price} MATIC
                </TicketModalContentSubTitle>
              </TicketModalBottomLayer>
              <TicketModalBottomLayer>
                <TicketModalContentTitle>N° Billet</TicketModalContentTitle>
                <TicketModalContentSubTitle>
                  {ticketDetails.ticketCode}
                </TicketModalContentSubTitle>
              </TicketModalBottomLayer>
            </TicketModalContentLayer>
          </TicketModalBottom>
        </TicketModalContent>
        <TicketModalQR>
          <QRCode
            size={300}
            style={{
              height: "auto",
              maxWidth: "100%",
              width: "100%",
              marginTop: "5vh",
            }}
            value={JSON.stringify(verifDetails)}
            viewBox={`0 0 300 300`}
          />
          <TicketModalQrBottomLayer>
            {!loader && txStatus === 0 && (
              <>
                <TicketModalContentResellPrice>
                  {ticketDetails.price}
                </TicketModalContentResellPrice>
                <TicketModalContentResellBtn
                  type="button"
                  onClick={() => sellTicket()}
                >
                  Mettre en vente
                </TicketModalContentResellBtn>
              </>
            )}

            {loader && txStatus === 1 && (
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <a style={{ padding: "15px" }}>
                  Votre ticket est entrain d'être remis en vente , veuillez
                  patienter. 🎟️
                </a>

                <Loader />
              </div>
            )}

            {!loader && txStatus === 3 && (
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <FcCancel size={50} />
                <a style={{ padding: "15px" }}>
                  Il y a eu une erreur lors de la mise en vente de votre billet,
                  veuillez réssayer plus tard 😢
                </a>
              </div>
            )}

            {!loader && txStatus === 2 && (
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <FcApproval size={50} />
                <a style={{ padding: "15px" }}>
                  Votre billet a bien été remis en vente ! 😎
                </a>
              </div>
            )}
          </TicketModalQrBottomLayer>
        </TicketModalQR>
      </TicketModal>
    </>
  );
}
