import React, { useState, useEffect } from "react";
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
  InformationTopTextStatus,
  Main,
  Title,
  DisconnectBox,
  DisconnectButton,
  DisconnectText,
  GoBackButton,
} from "./profile_user.styled";
import Image from "next/image";
import Link from "next/link";
import { globalGetRequest, globalRequest } from "../../../utils/validationForm/networkServices/networkServices";
import { FaRegTired } from "react-icons/fa";

// NEXT ROUTER
import { useRouter } from "next/router";

// FORM VALIDATION
import validationFormProfile from "../../../utils/validationForm/Profile/validationFormProfile";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// REACT-REDUX
import { useSelector } from "react-redux";

function profile_organisator() {
  const [organisator, setOrganisator] = useState({});
  const router = useRouter();
  const id = router.query.id;
  const [formData, setFormData] = useState({});

  const jwt = useSelector((state) => state.jwt);

  if (!jwt.accessToken) {
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

  useEffect(() => {
    const getOrganisator = async () => {
      const response = await globalGetRequest(
        'GET',
        `api/users/${id}`,
        jwt.accessToken,
      );
      setOrganisator(response.data);
    }
    getOrganisator();
  })

  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationFormProfile),
  });

  function editUser(e) {
    e.preventDefault();
    globalRequest("put", `api/users/${id}`, formData);
  }

  return (
    <Main>
      <Image
        src="/TTTransparent.png"
        alt="Trust Ticket Logo"
        width={50}
        height={50}
      />
      <Title>Profile</Title>
      <GoBackButton
        type="button"
        onClick={() => dispatch(displayEventCreator(!displayCreator))}
      >
        <FaArrowLeft color={"#212121"} size={"2em"} />
      </GoBackButton>
      <InformationTopBox>
        <Avatar src="/jul.jpg" />
        <InformationTopField>
          <InformationTopText>
            {organisator.firstname} {organisator.name}
          </InformationTopText>
          <InformationTopTextDark>
            {organisator.username}
          </InformationTopTextDark>
          <InformationTopTextStatus>
            {organisator.status}
          </InformationTopTextStatus>
        </InformationTopField>
      </InformationTopBox>
      <InformationBox>
        <InformationField>
          <InformationLabel>Firstname</InformationLabel>
          <InformationInput
            placeholder={organisator.firstname}
            {...register("firstname")}
            onChange={(e) => {
              setFormData({
                ...formData,
                firstname: e.target.value,
              });
            }}
          />
          <InformationLabel>Name</InformationLabel>
          <InformationInput
            placeholder={organisator.name}
            {...register("name")}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
            }}
          />
          <InformationLabel>Username</InformationLabel>
          <InformationInput
            placeholder={organisator.username}
            disabled={true}
          />
          <InformationLabel>Email</InformationLabel>
          <InformationInput placeholder={organisator.email} disabled={true} />
          <InformationLabel>Phone</InformationLabel>
          <InformationInput
            placeholder={organisator.phone}
            {...register("phone")}
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: e.target.value,
              });
            }}
          />
          <InformationLabel>Address</InformationLabel>
          <InformationInput
            placeholder={organisator.address}
            {...register("address")}
            onChange={(e) => {
              setFormData({
                ...formData,
                address: e.target.value,
              });
            }}
          />
          <InformationLabel>Wallet Address</InformationLabel>
          <InformationInput
            placeholder={organisator.wallet_address}
            {...register("wallet_address")}
            onChange={(e) => {
              setFormData({
                ...formData,
                wallet_address: e.target.value,
              });
            }}
          />
          <InformationLabel>Avatar</InformationLabel>
          <InformationInput
            placeholder={organisator.avatar}
            {...register("avatar")}
            onChange={(e) => {
              setFormData({
                ...formData,
                avatar: e.target.value,
              });
            }}
          />
          <ButtonBox>
            <Button onClick={editUser}>Edit</Button>
          </ButtonBox>
        </InformationField>
      </InformationBox>
    </Main>
  );
}

export default profile_organisator;
