import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import LoginForm from "../components/login"

export default function login() {
  const auth = useSelector((state) => state.jwt.auth)
  const router = useRouter()
  React.useEffect(() => {

    if (auth && auth.accessToken) {
      router.push('/')
    }


  })

  return <LoginForm />;

}
