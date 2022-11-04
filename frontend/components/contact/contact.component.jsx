import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  Main,
  GlobalContainer,
  LeftContainer,
  RightContainer,
  Text,
  LittleTitle,
  BigTitle,
  Input,
  TextArea,
  Submit,
} from "./contact.styled";
import Header from "../assets/Header/Header.component";

import { useSelector } from "react-redux";

export default function ContactComponent() {
  const auth = useSelector((state) => state.jwt.auth);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const MailTo = () => {
    return (
      <Link
        href={`mailto:trust-tickets@gmail.com?subject=${
          formData.title || ""
        }&body=${formData.name + " : " + formData.message || ""}`}
      >
        <a>
          <Submit>Envoyer</Submit>
        </a>
      </Link>
    );
  };

  return (
    <GlobalContainer>
      <Head></Head>
      <Header auth={auth} />
      <Main>
        <LeftContainer>
          <LittleTitle>CONTACTEZ NOUS</LittleTitle>
          <BigTitle>
            Vous avez une question ? Nous aimerions vous aider.
          </BigTitle>
          <Text>trust-tickets@gmail.com</Text>
        </LeftContainer>
        <RightContainer>
          <Input
            name="name"
            placeholder="Nom"
            type="text"
            onChange={handleChange}
          />
          <Input
            name="title"
            placeholder="Titre"
            type="text"
            onChange={handleChange}
          />
          <TextArea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />
          <MailTo />
        </RightContainer>
      </Main>
    </GlobalContainer>
  );
}
