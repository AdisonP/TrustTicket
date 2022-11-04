import React from "react";
import ProfileUser from "../components/profile/profile_user_component/profile_user.component";
import UploadComponent from "../components/upload/upload.component";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Loader } from "../components/loader/loader_styled";
function profile() {
  const [loading, setLoading] = useState(true)

  const auth = useSelector((state) => state.jwt.auth)
  const router = useRouter()
  useEffect(() => {

    if (!auth) {
      router.push("/")

    } else {
      setLoading(false)
    }



  }, [])
  return (
    <>
      {
        !loading ? <ProfileUser /> : <Loader />
      }

    </>
  );
}

export default profile;
