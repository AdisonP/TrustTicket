import React, { useState, useEffect } from "react";
import {
  CountDownBox,
  CountDownText,
  CountDownTextBox,
  CountDownTextEnd,
  CountDownTextLayout,
  CountDownTextMainBox,
  CountDownTitle,
  Main,
} from "./sellCountdown.styled";
import Head from "next/head";

function SellCountdown(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [fullDate, setFullDate] = useState(null);
  const [end, setEnd] = useState(!props.end ? false : true);

  useEffect(() => {
    const date = new Date(props.date);
    const interval = setInterval(() => {
      const datenow = new Date();
      const difference = date.getTime() - datenow.getTime();
      const h = Math.floor(difference / (1000 * 60 * 60));
      setHours(h);
      const m = Math.floor(difference / (1000 * 60)) % 60;
      setMinutes(m);
      const s = Math.floor(difference / 1000) % 60;
      setSeconds(s);

      if (difference < 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setEnd(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Comfortaa:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        {!end ? (
          <CountDownBox>
            <CountDownTitle>Fin de la vente dans</CountDownTitle>
            <CountDownTextMainBox>
              <CountDownTextBox>
                <CountDownText>{hours}</CountDownText>
                <CountDownTextLayout>Heures</CountDownTextLayout>
              </CountDownTextBox>
              <CountDownText>·</CountDownText>
              <CountDownTextBox>
                <CountDownText>{minutes}</CountDownText>
                <CountDownTextLayout>Minutes</CountDownTextLayout>
              </CountDownTextBox>
              <CountDownText>·</CountDownText>
              <CountDownTextBox>
                <CountDownText>{seconds}</CountDownText>
                <CountDownTextLayout>Secondes</CountDownTextLayout>
              </CountDownTextBox>
            </CountDownTextMainBox>
          </CountDownBox>
        ) : (
          <CountDownBox>
            <CountDownTitle>Vente terminée...</CountDownTitle>
            <CountDownTextMainBox>
              <CountDownTextBox>
                <CountDownTextEnd>
                  La vente des billets pour cet évennement est terminée
                </CountDownTextEnd>
              </CountDownTextBox>
            </CountDownTextMainBox>
          </CountDownBox>
        )}
      </Main>
    </>
  );
}

export default SellCountdown;
