import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setJWT } from "../../../store/features/jwt/jwt";
import { logout } from "../../../store/features/jwt/jwt";
import { globalRequest } from "../../../utils/validationForm/networkServices/networkServices";

// IMPORT COMPONENTS
import { Button, SelectedButton, Nav } from "./DashboardNavRightCTA.styled";


function CategoriesNav() {
  const [isFocus, setIsFocus] = useState("All");
  const auth = useSelector((state) => state.jwt.auth)
  const dispatch = useDispatch()
  const logoutUser = () => {
    const logOut = globalRequest("POST", "api/auth/logout", { token: auth.accessToken }, auth.token).then(res => {
      dispatch(logout())
      if (res.status === 200) {
        dispatch(logout())
      }
    })
  }
  return (
    <Nav>
      {auth ? <Link href='/profile'>
        <Button>Mon compte</Button>
      </Link> : null}

      {auth ? <Link href='/dashboard'>
        <Button>Dashboard</Button>
      </Link> : null}

      {auth ? null : <Link href='/register'>
        <Button>S'enregistrer</Button>
      </Link>}

      {auth ?
        <Link href='/marketplace'>
          <Button onClick={logoutUser}>Se deconnecter</Button>
        </Link>
        : <Link href='/login'>
          <Button>Se connecter</Button>
        </Link>}

      <Link href='/about'>
        <Button>Nous contacter</Button>
      </Link>
    </Nav>
  );
}

export default CategoriesNav;
