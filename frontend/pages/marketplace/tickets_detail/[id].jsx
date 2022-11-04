import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SellCountdown from "../../../components/marketplace/Tickets/SellCountdown/sellCountdown.component";
import {
  DescriptionBox,
  DescriptionText,
  DescriptionTitle,
  Main,
  Row,
  TicketDetailsLittleBox,
  TicketDetailsMainBox,
  TicketDetailsText,
  MainTicketContainer,
  PriceButton2,
  NftContainer,
  NftTitle,
  NftDescription,
  NftBtn,
  NftContainer2,
  GoBackButton,
} from "../../../components/marketplace/Tickets/tickets.styled";
import Loader from "../../../components/loader/loader";
import { ethers } from "ethers";

import {
  convertTimestampToDate,
  convertTimestampToDateFR
} from "../../../utils/utilsMethods";

// NEXT ROUTER
import { useRouter } from "next/router";

import { FaArrowLeft } from "react-icons/fa";
import TicketTileBig from "../../../components/marketplace/Tickets/TicketTileBig/ticketTileBig";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Head from "next/head";
import Image from "next/image";
import { Network, Alchemy } from "alchemy-sdk";
import { NextFetchEvent } from "next/dist/server/web/spec-extension/fetch-event";
import * as contractJSON from "../../../../back/artifacts/contracts/TrustTicketsMarketplace.sol/TrustTicketMarketplace.json";
import BuyingLoader from "../../../components/marketplace/BuyingLoader/BuyingLoader";
import Header from "../../../components/assets/Header/Header.component";

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:8080/api/events");
  const data = await res.json();

  const id = context.params.id;

  const res2 = await fetch("http://localhost:8080/api/events/" + id);
  const data2 = await res2.json();
  console.log(data2);
  return {
    props: {
      event: data2,
    },
  };

  const paths = data2.map((event) => {
    return {
      params: { id: event.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };


};

// export const getStaticProps = async (context) => {

// };

function TicketsDetailsComponents({ event }) {
  const router = useRouter();
  const auth = useSelector((state) => state.jwt.auth);
  const [currentWallet, setWallet] = useState();
  const [nftList, setNftList] = useState([]);
  const [role, setRole] = useState("guest");
  const [loader, setLoader] = useState(false);
  const [transactionLoader, setTransactionLoader] = useState(false);
  const [transactionStatus, setStatus] = useState(0);

  const getCurrentWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          console.log(accounts[0]);
          setWallet(accounts[0]);
        })
        .catch((reason) => {
          console.log(reason);
        });
    } else {
      console.log("metamask not detected");
    }
  };

  const getNfts = async () => {
    //Avec le nouveau contrat , le "owner" des nft lorsquelles sont en vente est le contrat lui même
    const res = await fetch(
      `https://polygon-mumbai.g.alchemyapi.io/nft/v2/demo/getNFTs/?owner=${event.contractAddress}&contractAddresses[]=${event.contractAddress}`
    );
    const data = await res.json();

    data.ownedNfts.map((nfts) => {
      if (nfts.description || nfts.title) {
        var x = nfts.metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        nfts.metadata.image = x;
      } else {
        setLoader(false);
      }
    });
    var temp = [];

    temp.push(data);
    console.log(temp);
    return {
      props: setNftList(temp),
    };
  };

  useEffect(() => {
    if (auth) {
      setRole(auth.role);
    }
    console.log(event);
    getNfts();
    getCurrentWallet();
  }, []);

  const buyTicket = async (ticket) => {
    var init = false;
    setTransactionLoader(true);
    setStatus(1);
    //L'utilisateur doit signer la transaction donc on utilise Web3Provider
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = web3Provider.getSigner();
    const contract = new ethers.Contract(
      event.contractAddress,
      contractJSON.abi,
      signer
    );
    const price = ethers.utils.parseUnits(
      ticket.metadata.price.toString(),
      "wei"
    );
    const transaction = await contract
      .buyTicket(ticket.id.tokenId, currentWallet, event.organisatorWallet, {
        value: price,
        gasLimit: 350000,
      })
      .catch((err) => {
        setStatus(3);
        setTimeout(() => {
          setTransactionLoader(false)
          setStatus(0)
        }, 3500)
        console.log(err)
      })
    if (transaction) {
      await transaction
        .wait()
        .then(() => {
          setStatus(2)
          getNfts()
          setTimeout(() => {
            setTransactionLoader(false)
            setStatus(0)
          }, 3000)
        })
        .catch((err) => {
          setTransactionLoader(false)
          setStatus(3)
        })
    }

  }
  return (
    <>
      <Header />
      <Main>
        <div
          style={{
            position: "relative",
            width: "90%",
            height: "400px",
            borderRadius: "40px",
            border: "2px solid #3b3b3d",
          }}
        >
          <Image
            style={{ borderRadius: "40px" }}
            placeholder="empty"
            src={
              event.picture != 'empty'
                ? process.env.NEXT_PUBLIC_API_URL + event.picture.path
                : "/event_placeholder.png"
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        {transactionLoader && <BuyingLoader status={transactionStatus} />}
        {!transactionLoader && (
          <>
            <TicketDetailsMainBox>
              <GoBackButton
                type="button"
                onClick={() => router.push("/marketplace")}
              >
                <FaArrowLeft color={"#212121"} size={"2em"} />
              </GoBackButton>
              <FaRegCalendarAlt size={35} color="#6c4ed8" />
              <TicketDetailsLittleBox>
                <TicketDetailsText>
                  {convertTimestampToDateFR(event.event_date)}
                </TicketDetailsText>
                <TicketDetailsText></TicketDetailsText>
              </TicketDetailsLittleBox>
              <GoLocation size={35} color="#6c4ed8" />
              <TicketDetailsLittleBox>
                <TicketDetailsText>{event.localisation}</TicketDetailsText>
                <TicketDetailsText>{event.city}</TicketDetailsText>
              </TicketDetailsLittleBox>
            </TicketDetailsMainBox>

            <SellCountdown date={convertTimestampToDate(event.event_date)} />
            {/*         <PriceButton>Acheter pour {event.price}€</PriceButton>
             */}
            <DescriptionBox>
              <a
                href={`https://mumbai.polygonscan.com/address/${event.contractAddress}`}
                target="_blank"
                style={{
                  color: "white",
                  paddingBottom: "10px",
                  textDecoration: "underline",
                  fontSize: 'small',
                }}
              >
                Contrat : {event.contractAddress}
              </a>
              <DescriptionTitle>A propos de cet évenement: </DescriptionTitle>
              <DescriptionText>{event.description}</DescriptionText>
            </DescriptionBox>
            <MainTicketContainer>
              <Row>
                <>
                  {nftList.map((ticket, index) => (
                    <div key={index} style={{ color: "white" }}>
                      <h1>
                        {ticket.totalCount} Tickets disponibles à l'achat:
                      </h1>
                      <br />
                      <Row>
                        {ticket.ownedNfts.map((nft, index) =>
                          nft.metadata.image ? (
                            <NftContainer key={index}>
                              <div
                                style={{
                                  position: "relative",
                                  height: "275px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "none",
                                    color: "#161618",
                                  }}
                                >
                                  {/* {
                            (nft.metadata.image = nft.metadata.image.replace(
                              "ipfs://",
                              "https://ipfs.io/ipfs/"
                            ))
                          } */}
                                </div>
                                {nft.metadata.image ? (
                                  <Image
                                    style={{ borderRadius: "40px 40px 0 0" }}
                                    placeholder="empty"
                                    src={
                                      nft.metadata.image ? (
                                        nft.metadata.image
                                      ) : (
                                        <>
                                          {"/event_placeholder.png"}
                                          <Loader />
                                        </>
                                      )
                                    }
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                ) : (
                                  <>
                                    <div
                                      style={{
                                        marginTop: "15vh",
                                        display: "flex",
                                        flex: 1,
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <a>
                                        Chargement des billets, veuillez
                                        patentiez!
                                      </a>
                                      <Loader />
                                    </div>
                                    {/* <Image
                                  style={{ borderRadius: "40px 40px 0 0" }}
                                  placeholder="empty"
                                  src={"/event_placeholder.png"}
                                  layout="fill"
                                  objectFit="contain"
                                /> */}
                                  </>
                                )}
                                {/* <Image
                              style={{ borderRadius: "40px 40px 0 0" }}
                              placeholder="empty"
                              src={
                                nft.metadata.image ? (
                                  nft.metadata.image
                                ) : (
                                  <>
                                    {"/event_placeholder.png"}
                                    <Loader />
                                  </>
                                )
                              }
                              layout="fill"
                              objectFit="contain"
                            /> */}
                              </div>
                              <NftContainer2>
                                <NftTitle>{nft.metadata.name}</NftTitle>
                                <NftDescription>
                                  {nft.metadata.description}
                                </NftDescription>
                              </NftContainer2>

                              <NftBtn
                                onClick={() => buyTicket(nft)}
                                disabled={
                                  role === "organisator" || role === "guest"
                                    ? true
                                    : false
                                }
                              >
                                {role === "user" && (
                                  <div>
                                    Acheter pour {nft.metadata.price}
                                    <div
                                      style={{
                                        position: "relative",
                                        height: "30px",
                                      }}
                                    >
                                      <Image
                                        src={"/polygon-matic-logo.png"}
                                        layout="fill"
                                        objectFit="contain"
                                      />
                                    </div>
                                  </div>
                                )}

                                {role === "organisator" && (
                                  <div>
                                    Vous ne pouvez pas acheter de billets avec
                                    un compte organisateur !
                                  </div>
                                )}

                                {role === "guest" && (
                                  <div>
                                    Vous devez être connecté pour acheter un
                                    billet !
                                  </div>
                                )}
                              </NftBtn>
                            </NftContainer>
                          ) : (
                            <div
                              key={index}
                              style={{
                                marginTop: "15vh",
                                marginRight: "5vh",
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                flexDirection: "column",
                                alignContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <a>Chargement du billet</a>
                              <Loader />
                            </div>
                          )
                        )}
                      </Row>
                    </div>
                  ))}
                </>
              </Row>
            </MainTicketContainer>
          </>
        )}
      </Main>
    </>
  );
}

export default TicketsDetailsComponents;
