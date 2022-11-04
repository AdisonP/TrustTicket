import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { globalRequest } from "../../../utils/validationForm/networkServices/networkServices";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/features/jwt/jwt";

// IMPORT ICONS
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

// IMPORT STYLED COMPONENTS
import {
  HeaderContainer,
  HeaderLogoLayer,
  HeaderLogo,
  HeaderSearchLayer,
  HeaderSearch,
  HeaderSearchInput,
  HeaderMenuLayer,
  HeaderMenu,
  HeaderLinks,
  HeaderMenuIconLayer,
} from "./Header.styled";

export default function Header({ auth }) {
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // DISPATCH
  const dispatch = useDispatch();

  // LOGOUT FUNCTION
  const logoutUser = () => {
    const logOut = globalRequest(
      "POST",
      "api/auth/logout",
      { token: auth.accessToken },
      auth.token
    ).then((res) => {
      dispatch(logout());
      if (res.status === 200) {
        dispatch(logout());
      }
    });
  };

  return (
    <HeaderContainer>
      <HeaderLogoLayer>
        <Link href="/marketplace">
          <a>
            <HeaderLogo src="/tt.png" alt="Trust Tickets Logo" />
          </a>
        </Link>
      </HeaderLogoLayer>
      {!isOpen && (
        <>
          {/* Pourquoi mettre un bouton search alors que ce n'est pas une fonctionalitée prévue ? */}
          {/* <HeaderSearchLayer>
            <HeaderSearch
              onMouseEnter={() => setIsSearching(!isSearching)}
              onMouseLeave={() => setIsSearching(!isSearching)}
              style={{ width: !isSearching ? "60px" : "200px" }}
            >
              <BsSearch
                style={{
                  transform: isSearching
                    ? "translate(30%, 40%)"
                    : "translate(130%, 40%)",
                }}
              />
              <HeaderSearchInput />
            </HeaderSearch>
          </HeaderSearchLayer> */}
          <HeaderLinks>
            <Link href="/profile">
              <a>Mon Profil</a>
            </Link>
            <Link href="/dashboard">
              {auth && auth.role === "organisator" ? (
                <a>Mon espace organisateur</a>
              ) : (
                <a>Mes tickets</a>
              )}
            </Link>

            <Link href="/contact">
              <a>Nous contacter</a>
            </Link>

            {!auth && (
              <Link href="/login">
                <a>Se connecter</a>
              </Link>
            )}

            {auth && (
              <Link href="/">
                <a onClick={logoutUser}>Se déconnecter</a>
              </Link>
            )}
          </HeaderLinks>
        </>
      )}
      <HeaderMenuIconLayer>
        <HiOutlineMenuAlt3 onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <HeaderMenuLayer>
            <HiOutlineMenuAlt3
              onClick={() => setIsOpen(!isOpen)}
              color={"white"}
              size={32}
            />
            <HeaderMenu onClick={() => setIsOpen(!isOpen)}>
              <Link href="/profile">
                <a>Mon compte</a>
              </Link>
              <Link href="/dashboard">
                <a>
                  {auth && auth.role === "organisator"
                    ? "Mon espace organisateur"
                    : "Mes tickets"}
                </a>
              </Link>
              {auth && (
                <Link href="/">
                  <a onClick={logoutUser}>Se déconnecter</a>
                </Link>
              )}
              {!auth && (
                <Link href="/login">
                  <a>Se connecter</a>
                </Link>
              )}
              <Link href="/contact">
                <a>Nous contacter</a>
              </Link>
            </HeaderMenu>
          </HeaderMenuLayer>
        )}
      </HeaderMenuIconLayer>
    </HeaderContainer>
  );
}
