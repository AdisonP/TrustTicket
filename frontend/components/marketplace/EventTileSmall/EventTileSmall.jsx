import { useRouter } from 'next/router'
import VerifiedStatus from '../../marketplace/VerifiedStatus/VerifiedStatus'
import Localisation from '../../marketplace/VerifiedStatus/Localisation'
import { SmallTile, SmallPrice } from './EventTileSmall.styled'
import Date from '../VerifiedStatus/Date'
import convertTimestampToDateFR from '../../../utils/utilsMethods'
import { GrValidate } from 'react-icons/gr'
export default function EventTileSmall({ props, displayDetailTicket }) {
  const router = useRouter()
  return (
    <div
      style={{ height: '100%' }}
      className='eventTileSmall'
      onClick={() => router.push(`/marketplace/tickets_detail/${props.id}`)}
    >
      <SmallTile
        onClick={displayDetailTicket}
        className='eventTileSmall-square'
        style={{
          backgroundImage: `url( ${props.picture != undefined
              ? process.env.NEXT_PUBLIC_API_URL + props.picture.path
              : 'https://image.yachtcharterfleet.com/w1277/h618/qh/ca/m2/kdf00840d/vessel/resource/702818/charter-itoto-yacht.jpg'
            })`,
        }}
      >
        <div style={{ position: 'relative' }}>
          <VerifiedStatus official={props.name} />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Date official={props.event_date}> </Date>

          <Localisation official={props.localisation} />
        </div>
      </SmallTile>
      {/* Prix à définir en faisant un range en fonctions des prix des billets */}
      {/* <SmallPrice className="eventTileSmall-price">{props.price}€</SmallPrice> */}
    </div>
  )
}
