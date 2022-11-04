import * as S from './dashboard_user.styled'

import SquareTickets from '../../assets/DashboardNav/SquareTickets.component'
import React, { useState, useEffect } from 'react'
import TicketDetail from './dashboard_user_tickets_component/owned_ticket_detail_component/ticket_detail_component/ticket_detail.component'
import { useSelector } from 'react-redux'

import { useRouter } from 'next/router'

export default function UserDashBoard() {
  const [selectedTicket, setSelectedTicket] = useState()
  const [selectedTicketId, setTicketId] = useState()
  const [nftList, setNftList] = useState([])
  const [loader, setLoader] = useState(false)
  const router = useRouter()
  const auth = useSelector((state) => state.jwt.auth)
  const setDisplayDetails = (ticket, ticketId) => {
    setSelectedTicket(ticket)
    setTicketId(ticketId)
    getNfts();
  }

  const getNfts = async () => {
    //Avec le nouveau contrat , le "owner" des nft lorsquelles sont en vente est le contrat lui même
    const res = await fetch(
      `https://polygon-mumbai.g.alchemyapi.io/nft/v2/demo/getNFTs/?owner=${auth.walletAddress}`
    )

    if (res.status === 200) {
      const data = await res.json()
      if (data.ownedNfts.length != 0) {
        data.ownedNfts.map((nfts) => {
          if (nfts.description || nfts.title) {
            var x = nfts.metadata.image.replace(
              'ipfs://',
              'https://ipfs.io/ipfs/'
            )
            nfts.metadata.image = x
          } else {
            setLoader(false)
          }
        })
        var temp = []

        temp.push(data)
        console.log(temp)

        return {
          props: setNftList(temp),
        }
      } else {
        console.log('Erreur lors de la récupération de vos billets')
      }
    }
  }

  useEffect(() => {
    if (nftList.length === 0) {
      getNfts()
    }
    getNfts()
  }, [])

  return (
    <div style={{fontFamily: "Comfortaa"}}>
      {!selectedTicket && nftList.length != 0 && (
        <div style={{ overflowX: 'scroll' }}>
          <div style={{ color: 'white', margin: '30px', fontSize: '2rem' }}>
            Mes tickets
          </div>
          <S.Row1>
            {nftList &&
              nftList[0].ownedNfts?.map((ticket, key) => (
                <SquareTickets
                  key={key}
                  ticketDetails={ticket.metadata}
                  ticketId={ticket.id}
                  name={ticket.metadata.name}
                  img={ticket.metadata.image}
                  setDisplayDetails={setDisplayDetails}
                />
              ))}
          </S.Row1>
        </div>
      )}

      {selectedTicket && (
        <TicketDetail
          setDisplayDetails={setDisplayDetails}
          ticketDetails={selectedTicket}
          ticketId={selectedTicketId}
        />
      )}

      {!selectedTicket && nftList.length == 0 && (
        <div style={{ color: 'white', margin: '30px', fontSize: '2rem' }}>
          Vous n'avez aucun ticket pour l'instant , visitez le marketplace et
          trouver l'évenement qui vous fera kiffer !
        </div>
      )}
    </div>
  )
}
