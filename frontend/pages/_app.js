import "../styles/global.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import "../styles/marketplace.css";
import "../styles/componentsStyles/UserDashboard.css";
import Head from "next/head";

// IMPORT COMPONENT STYLES
import "../styles/componentsStyles/eventTileBig.css";
import "../styles/componentsStyles/eventTitleSmall.css";
import "../styles/componentsStyles/dashboardStats.css";
import "../styles/componentsStyles/dashboardEvent.css";
import "../styles/componentsStyles/categoriesNav.css";
import "../styles/componentsStyles/verifiedStatus.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
