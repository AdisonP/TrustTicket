import CategoriesNav from "../components/marketplace/CategoriesNav/CategoriesNav";
import EventTileSmall from "../components/marketplace/EventTileSmall/EventTileSmall";
import EventTileBig from "../components/marketplace/EventTileBig/EventTileBig";
import { globalRequest } from "../utils/validationForm/networkServices/networkServices";
import { useEffect, useState } from "react";

import axios from "axios";
import { Button } from "../components/marketplace/CategoriesNav/CategoriesNav.styled";

import Header from "../components/assets/Header/Header.component";
import { useSelector } from "react-redux";

import * as style from "../styles/generic_components.styled";
import { useRouter } from "next/router";
export default function marketplace() {
  const [listEvent, setlistEvent] = useState([]);
  const [listCategories, setlistCategories] = useState([]);
  const [lisEventMemory, setlisEventMemory] = useState([]);
  const [trendingEvent, setTrendingEvent] = useState();
  const auth = useSelector((state) => state.jwt.auth);
  useEffect(() => {
    const getEvents = async () => {
      const response = await globalRequest(
        "POST",
        `api/events/all/sort`,
        "nope"
      );
      var temp = [];
      if (response.status === 200) {
        temp.push(...response.data);

        setlistEvent(temp);
        setTrendingEvent(temp[0]);
        setlisEventMemory(temp);
      }
    };

    const getCategorys = async () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}api/categorie`)
        .then((res) => {
          if (res.status === 200) {
            setlistCategories(res.data);
          }
        })
        .catch((err) => console.log(err));
    };

    getEvents();
    getCategorys();
  }, []);
  const catClicked = (cat) => {
    const response = globalRequest(
      "POST",
      `api/events/all/sort`,
      { categorie_id: cat.id },
      "nope"
    ).then((response) => {
      if (response.status === 200) {
        var temp = [];
        temp.push(...response.data);
        setlistEvent(temp);
        setlisEventMemory(temp);
      }
    });
  };

  const sortByPrice = (isAscending) => {
    if (isAscending == null) {
      var temp = [];
      temp.push(...lisEventMemory);
      setlistEvent(temp);
    } else {
      var temp = [];
      temp.push(...listEvent.sort((a, b) => a.price - b.price));
      setlistEvent(isAscending ? temp : temp.reverse());
      console.log(lisEventMemory);
    }
  };

  return (
    <style.Container>
      <Header auth={auth} />
      {listEvent ? (
        <>
          {listCategories.length > 0 ? (
            <CategoriesNav listCategories={listCategories} catCb={catClicked} />
          ) : null}

          {listEvent.length === 0 && (
            <style.Container>
              <style.FadeInH2>
                Pas d'événements correspondants ....
              </style.FadeInH2>

              <style.notFound>🤔</style.notFound>
            </style.Container>
          )}

          {listEvent.length != 0 && (
            <>
              <style.FadeInH1 className="marketplace-title-main">
                En vedette 🔥
              </style.FadeInH1>
              <EventTileBig event={trendingEvent} />
            </>
          )}

          {/* Meilleures ventes a rajouter quand quand on pourra definir un evenement en meilleur vente */}
          {/* <style.Container2 className="marketplace-top-sellers">
            {listEvent.length != 0 && (
              <>
                <style.FadeInH1>Meilleures Ventes 🔥 </style.FadeInH1>
                {listEvent.map((event, index) => (
                  <style.EventContainer>
                    <Link
                      href="/marketplace/tickets_detail/[id]"
                      as={`/marketplace/tickets_detail/${event.id}`}
                    >
                      <EventTileSmall props={event} key={index} />
                    </Link>
                  </style.EventContainer>
                ))}
              </>
            )}
          </style.Container2> */}
          {listEvent.length != 0 && (
            <style.FilterContainer
              style={{ marginTop: "30px" }}
            >
              <Button
                onClick={() => {
                  sortByPrice(true);
                }}
              >
                - au +
              </Button>
              <Button
                onClick={() => {
                  sortByPrice(false);
                }}
              >
                + au -
              </Button>
              <Button
                onClick={() => {
                  sortByPrice(null);
                }}
              >
                Annuler
              </Button>
            </style.FilterContainer>
          )}

          <style.Container>
            {listEvent.length != 0 && (
              <>
                <style.Row>
                  <style.FadeInH1 className="marketplace-title-main">
                    Tous les évènements 📆
                  </style.FadeInH1>
                </style.Row>
                <style.Row>
                  {listEvent.map((event, index) => (
                    <style.EventContainer2>
                      <EventTileSmall props={event} key={index} />
                    </style.EventContainer2>
                  ))}
                </style.Row>
              </>
            )}
          </style.Container>
        </>
      ) : (
        <style.FadeInH1>🤔</style.FadeInH1>
      )}
    </style.Container>
  );
}
