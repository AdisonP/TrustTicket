import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loader from "../components/loader/loader";
import { useSelector } from "react-redux";

import UploadComponent from "../components/upload/upload.component";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);

  const auth = useSelector((state) => state.jwt.auth);

  useEffect(() => {
    if (auth) {
      if (auth.accessToken && auth.role === "user") {
        router.push("marketplace");
      }

      if (auth.accessToken && auth.role === "organisator") {
        router.push("dashboard");
      }
    }

    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [loader]);

  return loader ? (
    <div className={styles.container}>
      <Image
        src="/TTTransparent.png"
        alt="Trust Ticket Logo"
        width={200}
        height={200}
      />
      <Loader />
    </div>
  ) : (
    <div className={styles.container} style={{ fontFamily: "Comfortaa" }}>
      <Image
        src="/TTTransparent.png"
        alt="Trust Ticket Logo"
        width={200}
        height={200}
      />

      <Link href="/register">
        <a className={styles.link}>Inscription</a>
      </Link>
      <Link href="/login">
        <a className={styles.link}>Connexion</a>
      </Link>
    </div>
  );
}
