import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  ButtonBox,
  InformationBox,
  InformationField,
  InformationInput,
  InformationLabel,
  InformationTopBox,
  InformationTopField,
  InformationTopText,
  InformationTopTextDark,
  InformationTopTextLigth,
  InformationTopTextDiv,
  InformationTopTextSubDiv,
  InformationCryptoBox,
  CryptoInfoLayer,
  CryptoInfoTitle,
  CryptoInfoSubTitle,
  CryptoInfoSubDiv,
  CryptoIcon,
  EventIcon,
  TicketInfoLayer,
  TicketInfoText,
  TicketInfoTextLayer,
  HistoryTitle,
  UpdateButton,
  DeleteButton,
  Main,
  Title,
  DisconnectBox,
  DisconnectButton,
  DisconnectText,
  ButtonQuit,
  BgImg,
  TransBox,
  GoBackButton,
} from "./profile_user.styled";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import {
  deleteRequest,
  getRequest,
  globalGetRequest,
  globalRequest,
  putRequest,
} from "../../../utils/validationForm/networkServices/networkServices";
import { FaRegTired } from "react-icons/fa";
import { ethers } from "ethers";

// NEXT ROUTER
import { useRouter } from "next/router";

// FORM VALIDATION
import validationFormProfile from "../../../utils/validationForm/Profile/validationFormProfile";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// REACT-REDUX
import { useSelector } from "react-redux";
import { Loader } from "../../loader/loader_styled";

function profile_user() {
  const [user, setUser] = useState();
  const router = useRouter();
  const [formData, setFormData] = useState();
  //Initialisation d'une variable d'état vide pour récup les tickets et les sauvegarder dans l'etat du composant
  const [tickets, setTickets] = useState();
  const jwt = useSelector((state) => state.jwt.auth);
  //Initialisation de la variable de loader
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [maticPrice, setMaticPrice] = useState();

  // NE PAS TOUCHER => REQUETE POUR RECUPERER LA VALEUR DU MATIC PENDING
  async function getMaticPrice() {
    const interval = setInterval(async () => {
      let response = null;

      try {
        response = await axios.get(
          "https://api.coinbase.com/v2/exchange-rates?currency=MATIC",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
            },
          }
        );
        const result = response.data.data;
        const matic = result.rates.USDT;
        setMaticPrice(matic);
        console.log(matic);
      } catch (e) {
        response = null;
        console.log(e);
      }
    }, 10000);
  }


  //Ici il faut d'abord check la présence de l'objet jwt avant de check sa propriété sinon react marque une erreur
  if (jwt == undefined || !jwt.accessToken) {
    return (
      <DisconnectBox>
        <FaRegTired size={50} color="#54D2FD" />
        <DisconnectText>
          You must be registered to access your Profile...
        </DisconnectText>
        <Link href="/login">
          <DisconnectButton>Go to Login</DisconnectButton>
        </Link>
        <Link href="/register">
          <DisconnectButton>Go to Register</DisconnectButton>
        </Link>
      </DisconnectBox>
    );
  }

  //Fonction pour récuperer les infos de l'user
  const getUser = async () => {
    console.log("GET USER  => " + isUpdate);
    const re = await getRequest(`api/users/${jwt.id}`, jwt.accessToken)
      .then((res) => {
        if (res.status == 200) {
          setUser(res.data);
          setLoading(false);
          console.log(res.data);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!user) {
      setLoading(true);
      getUser();
    }
    getMaticPrice();
  }, []);

  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationFormProfile),
  });

  function editUser(e) {
    e.preventDefault();
    setUser();
    setLoading(true);
    const re = putRequest(
      `api/users/${jwt.id}`,
      formData,
      jwt.accessToken
    ).then((res) => {
      if (res.status == 200) {
        //Afficher le loader et rappeler la fonction getUser() pour mettre a jour les infos
        getUser();
        setIsUpdate(false);
      }
    });
  }

  function deleteUser(e) {
    e.preventDefault();
    const re = deleteRequest(`api/users/${jwt.id}`, jwt.accessToken).then(
      (res) => {
        if (res.status == 200) {
          setIsDelete(false);
          router.push("/login");
        }
      }
    );
  }

  return (
    <>
      <Main style={{}}>
        <BgImg
          style={{
            position: "absolute",
          }}
        >
          <Image
            style={{
              boxShadow: "100px 100px 100px 100px #161618 inset",
            }}
            src="/TTTransparent.png"
            alt="Trust Ticket Logo"
            width="600px"
            height="600px"
          />
          <TransBox style={{ position: "absolute" }} />
        </BgImg>

        {!isUpdate && !loading && (
          <>
            <GoBackButton
              type="button"
              onClick={() => router.push("/dashboard")}
            >
              <FaArrowLeft color={"#212121"} size={"2em"} />
            </GoBackButton>
            <InformationTopBox style={{ zIndex: 2 }}>
              {/* Récupération de l'avatar dans les infos du user */}
              {/*             <Avatar src={user.image ? user.image : "/profile_placeholder.png"} />
               */}
              <InformationTopField>
                <InformationTopText style={{ fontWeight: "bolder" }}>
                  {user.username}
                </InformationTopText>
                <InformationTopText
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {user.firstname} {user.name}
                </InformationTopText>
                <InformationTopTextDiv
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button onClick={() => setIsUpdate(true)}>
                    Mettre à jour mon compte
                  </Button>
                </InformationTopTextDiv>
                {/* <InformationTopTextDiv>
                <InformationTopTextSubDiv>
                  <InformationTopTextDark>Tickets</InformationTopTextDark>
                  <InformationTopTextLigth>
                    {user.tickets}
                  </InformationTopTextLigth>
                </InformationTopTextSubDiv>
                <InformationTopTextSubDiv>
                  <InformationTopTextDark>Wallet</InformationTopTextDark>
                  <InformationTopTextLigth>
                    {user.wallet}
                  </InformationTopTextLigth>
                </InformationTopTextSubDiv>
              </InformationTopTextDiv> */}
              </InformationTopField>
            </InformationTopBox>
            <InformationCryptoBox style={{ zIndex: 2 }}>
              <CryptoIcon />
              <CryptoInfoLayer>
                <CryptoInfoSubDiv>
                  <CryptoInfoTitle>MATIC</CryptoInfoTitle>
                  <CryptoInfoSubTitle>Polygon</CryptoInfoSubTitle>
                </CryptoInfoSubDiv>
                <CryptoInfoSubDiv>
                  {/*                   <CryptoInfoTitle>{user.amount}€</CryptoInfoTitle>
                   */}{" "}
                  <CryptoInfoSubTitle>
                    {maticPrice}€({user.moves}%)
                  </CryptoInfoSubTitle>
                </CryptoInfoSubDiv>
              </CryptoInfoLayer>
            </InformationCryptoBox>
            {/* {tickets != undefined ? (<HistoryTitle>Historique</HistoryTitle> && tickets.map((ticket) => (
            <TicketInfoLayer key={ticket.id}>
              <EventIcon
                style={{ backgroundImage: `url("${ticket.image}")` }}
              />
              <TicketInfoTextLayer>
                <TicketInfoText>
                  {ticket.artist} - {ticket.eventName}
                </TicketInfoText>
                <TicketInfoText>
                  {ticket.date} - {ticket.hour}
                </TicketInfoText>
                <TicketInfoText>
                  {ticket.place} - {ticket.city}
                </TicketInfoText>
              </TicketInfoTextLayer>
            </TicketInfoLayer>
          ))) : (<><a style={{ color: "white", fontWeight: "bolder", fontSize: 35 }}> Aucuns tickets achetés !</a></>)} */}
          </>
        )}
        {isUpdate && !loading && (
          <InformationBox style={{ zIndex: 2 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
              <InformationField>
                <InformationLabel>Prénom</InformationLabel>
                <InformationInput
                  placeholder={user.firstname}
                  {...register("firstname")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      firstname: e.target.value,
                    });
                  }}
                />
                <InformationLabel>Nom</InformationLabel>
                <InformationInput
                  placeholder={user.name}
                  {...register("name")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                />
                <InformationLabel>Nom d'utilisateur</InformationLabel>
                <InformationInput placeholder={user.username} disabled={true} />
                <InformationLabel>Email</InformationLabel>
                <InformationInput placeholder={user.email} disabled={true} />
                <InformationLabel>Numéro de téléphone</InformationLabel>
                <InformationInput
                  placeholder={user.phone}
                  {...register("phone")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    });
                  }}
                />
                <InformationLabel>Adresse Postale</InformationLabel>
                <InformationInput
                  placeholder={user.address}
                  {...register("address")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    });
                  }}
                />
                <InformationLabel>
                  Adresse du portefeuille metamask
                </InformationLabel>
                <InformationInput
                  placeholder={user.wallet_address}
                  {...register("wallet_address")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      wallet_address: e.target.value,
                    });
                  }}
                />
                <InformationLabel>Avatar</InformationLabel>
                {/* Ici mettre un bouton upload pour pouvoir
             éventuellement mettre a jour l'avatar 
             ou en ajouter un si il n'est pas présent */}
                <InformationInput
                  placeholder={user.avatar}
                  {...register("avatar")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      avatar: e.target.value,
                    });
                  }}
                />
                <ButtonBox>
                  <Button
                    disabled={formData ? false : true}
                    onClick={
                      //Clean l'état de l'user et affiché le loader
                      editUser
                    }
                  >
                    Mettre à jour vos informations
                  </Button>
                  <Button onClick={() => setIsDelete(true)}>
                    Supprimer mon compte
                  </Button>
                </ButtonBox>
              </InformationField>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <ButtonQuit onClick={() => setIsUpdate(false)}>X</ButtonQuit>
              </div>
            </div>
          </InformationBox>
        )}

        {loading && <Loader />}
      </Main>
    </>
  );
}

export default profile_user;
