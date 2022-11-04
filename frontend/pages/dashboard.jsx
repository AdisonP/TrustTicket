import { useSelector } from "react-redux";
import OrganisatorDashBoard from "../components/dashboard/dashboard_organisator_component";
import UserDashBoard from "../components/dashboard/dashboard_user_component";
import DashboardTopNav from "../components/assets/DashboardNav/dashboard_topnav.component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/assets/Header/Header.component";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const auth = useSelector((state) => state.jwt.auth);
  const router = useRouter();
  useEffect(() => {
    if (!auth) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [auth]);

  return (
    <>
      <Header auth={auth} />
      {!loading && auth && (
        <>
          {auth.role === "organisator" && <OrganisatorDashBoard />}

          {auth.role === "user" && <UserDashBoard />}
        </>
      )}
    </>
  );
}
