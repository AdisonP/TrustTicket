import { useState } from 'react'

// IMPORT STYLED COMPONENTS
import {
  BuyingLoaderMain,
  BuyingLoaderLayer,
  BuyingLoaderTitle,
} from './BuyingLoader.styled'

import { Loader } from '../../loader/loader_styled'

// IMPORT ICONS
import { FcApproval, FcCancel } from 'react-icons/fc'

export default function BuyingLoader({ status }) {
  return (
    <BuyingLoaderMain>
      <BuyingLoaderLayer>
        {status === 1 && (
          <>
            <Loader />
            <BuyingLoaderTitle>
              La transaction est en cours
              <br /> Veuillez patientez... 🎟️🎟️
            </BuyingLoaderTitle>
          </>
        )}

        {status === 2 && (
          <>
            <FcApproval size={50} />
            <BuyingLoaderTitle>
              Félicitations ! La transaction a été effectuée avec succès 😎
            </BuyingLoaderTitle>
          </>
        )}

        {status === 3 && (
          <>
            <FcCancel size={50} />
            <BuyingLoaderTitle>
              La transaction a échouée ou a été annulée , vous n'avez peut etre
              pas assez de fonds sur votre wallet MetaMask 😢
            </BuyingLoaderTitle>
          </>
        )}
      </BuyingLoaderLayer>
    </BuyingLoaderMain>
  )
}
