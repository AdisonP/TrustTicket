import React from "react";
import * as S from "../components/register/register.styled";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// COMPONENTS
import RegisterComponent from "../components/register";

export default function register() {
  const auth = useSelector((state) => state.jwt.auth);
  const router = useRouter();
  React.useEffect(() => {

    if (auth && auth.accessToken) {
      router.push("/");

    }
  });


  return <S.Main>{!auth && <RegisterComponent />}</S.Main>;

}
