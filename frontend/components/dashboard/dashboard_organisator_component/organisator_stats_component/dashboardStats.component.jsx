import React, { useState } from 'react'
import StatSquare from '../../../globals/StatSquare.jsx'
import * as S from './dashboardStats.styled'
import { FaMoneyBillWave, FaTicketAlt, FaCalendarCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function DashBoardStats() {
  const organisatorStats = useSelector((state) => state.organisator.events)

  return (
    <S.Main style={{ marginTop: '10px' }}>
      <div style={{ color: 'white', fontSize: '2rem', marginBlock: '1rem' }}>
        Vos statistiques de ventes :
      </div>
      <S.StatsRow>
        <S.StatTile>
          <S.Row>
            <FaMoneyBillWave size={50} color='white' />
          </S.Row>

          <S.Row
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'large',
              marginBottom: '15px',
              marginTop: '15px',
            }}
          >
            Total des ventes :
          </S.Row>

          <S.Row style={{ color: 'white' }}>
            {organisatorStats.totalSales
              ? organisatorStats.totalSales
              : "Aucune vente effectuée pour l'instant !"}
          </S.Row>
        </S.StatTile>

        <S.StatTile>
          <S.Row>
            <FaTicketAlt size={50} color='white' />
          </S.Row>

          <S.Row
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'large',
              marginBottom: '15px',
              marginTop: '15px',
            }}
          >
            Total des billets vendus:
          </S.Row>

          <S.Row style={{ color: 'white' }}>
            {organisatorStats.totalTicketsSold
              ? organisatorStats.totalTicketsSold
              : "Vous n'avez vendu aucun billet"}
          </S.Row>
        </S.StatTile>

        <S.StatTile>
          <S.Row>
            <FaCalendarCheck size={50} color='white' />
          </S.Row>

          <S.Row
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'large',
              marginBottom: '15px',
              marginTop: '15px',
            }}
          >
            Nombre d'événements crées
          </S.Row>

          <S.Row style={{ color: 'white' }}>
            {organisatorStats.numberOfEvents}
          </S.Row>
        </S.StatTile>
      </S.StatsRow>
    </S.Main>
  )
}
