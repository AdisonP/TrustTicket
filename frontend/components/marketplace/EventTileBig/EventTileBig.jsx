import Image from "next/image";
import { useRouter } from "next/router";
import { BigTile } from "./EventTileBig.styled";
import { useEffect } from "react";
import { useState } from "react";
export default function EventTileBig(event) {
  const [picturePath, setPicturePath] = useState()
  const router = useRouter()
  const eventInfo = event.event
  useEffect(() => {

    if (eventInfo.picture) {
      setPicturePath(process.env.NEXT_PUBLIC_API_URL + eventInfo.picture.path.replace("/", ""))
    }

  }, [])




  return (


    <BigTile path={picturePath ? picturePath : ""} onClick={() => { router.push(`/marketplace/tickets_detail/${eventInfo.id}`) }}>
      <div style={{ width: "2px" }}>
        {
          picturePath && <Image src={picturePath} width='3px' height="2px" />

        }
      </div>

    </BigTile>


  )

}
