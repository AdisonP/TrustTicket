import * as S from './create_tickets_form.styled'
import * as GenericStyle from '../../../../styles/generic_components.styled'
import { convertTimestampToDateFR } from '../../../../utils/utilsMethods'
import { useEffect, useState } from 'react'
import Loader from '../../../loader/loader'
import {
  UploadBox,
  UploadLabel,
  UploadInput,
  UploadText,
} from '../../../upload/upload.styled'
import * as networkServices from '../../../../utils/validationForm/networkServices/networkServices'
import { useSelector } from 'react-redux'
import { FaImage, FaCheckCircle } from 'react-icons/fa'

export default function CreateTickets({ event }) {
  const maxSliderValue = 25
  const [sliderValue, setSliderValue] = useState(0)
  const auth = useSelector((state) => state.jwt.auth.accessToken)
  const [error, setError] = useState()
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setFormData({
      ...formData,
      contractAddress: event.contractAddress,
      eventId: event.id,
      eventDetail: event,
    })
  }, [])

  async function pinMedia() {
    let newFormData = new FormData()
    newFormData.append('file', formData.file)
    //Pin metadata
    const response = await networkServices
      .globalRequest('POST', 'api/upload/pinMedia', newFormData, auth)
      .catch((err) => {
        setLoader(false)
        setError(err)
      })

    if (response.status === 200) {
      return response.data
    } else {
      setLoader(false)
      setError(
        'Il y a eu une erreur lors de la génération de vos billets, merci de réessayer plus tard ou de contacter le support technique.'
      )
    }
  }

  const mintTicket = async () => {
    setError()

    setLoader(true)

    const cid = await pinMedia()

    const cidUrl = cid ? cid.ipfs : null

    if (cidUrl) {
      let metadata = {
        name: formData.name,
        file: cidUrl,
        price: formData.price,
        value: formData.value,
        description: formData.description,
        contractAddress: formData.contractAddress,
        eventDetail: formData.eventDetail,
      }

      networkServices
        .globalRequest('POST', 'api/mintTickets', metadata, auth)
        .then((res) => {
          setLoader(false)
          if (res.status === 200) {
            setSuccess(true)
          } else {
            setLoader(false)
            switch (res.data.message) {
              case 'mint_fail':
                setError(
                  "Erreur de création des billets, vous avez déja générer ces billets ou vous n'avez pas fourni les fonds nécéssaires. "
                )
                break

              default:
                break
            }
          }
        })
        .catch((err) => {
          setLoader
          setError(err.data.message)
          console.log(err.data)
        })
    }
  }

  const handleImageUpload = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const UploadButton = () => {
    return (
      <UploadBox>
        <UploadLabel>
          <FaImage size={50} color={'#a68dfa'} />
          <UploadInput
            type='file'
            accept='image/*'
            placeholder='upload'
            onChange={handleImageUpload}
          />
        </UploadLabel>

        <UploadText>ArtWork du billet</UploadText>
      </UploadBox>
    )
  }

  return (
    <S.CardContainer>
      <div style={{ height: '100%' }}>
        <GenericStyle.Row style={{ flexDirection: 'column' }}>
          <div style={{ fontWeight: 'bolder', fontSize: '25px' }}>
            Création des billets
          </div>
        </GenericStyle.Row>
        <GenericStyle.Row>
          <div style={{ fontWeight: 'bold' }}>
            {event.name} | {convertTimestampToDateFR(event.event_date)}
          </div>
          {error && (
            <a style={{ color: 'red', fontWeight: 'bolder' }}>{error}</a>
          )}
        </GenericStyle.Row>

        {!success ? (
          <GenericStyle.Row>
            {loader ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <a>
                  Création des billets, cela peut prendre quelques minutes,
                  merci de patienter!
                </a>
                <Loader />
              </div>
            ) : (
              <S.TicketCreatorForm>
                <div>
                  <S.FormInput
                    placeholderTextColor='red'
                    placeholder='Nom du billet'
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <S.FormInput
                    placeholder='Prix'
                    type='number'
                    onChange={(e) => {
                      setFormData({ ...formData, price: e.target.value })
                    }}
                  />
                </div>

                <S.TextArea
                  placeholder='Description'
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value })
                  }}
                />
                <S.InputLabel>Nombre de billets à générer</S.InputLabel>
                <S.Slider
                  type={'range'}
                  min={0}
                  max={maxSliderValue}
                  value={sliderValue}
                  onChange={(e) => {
                    setFormData({ ...formData, value: e.target.value })
                    setSliderValue(e.target.value)
                  }}
                ></S.Slider>
                <S.TicketNumber>
                  {sliderValue} / {maxSliderValue}
                </S.TicketNumber>
                <UploadButton />
                <S.Button type='button' onClick={mintTicket}>
                  Génerer les billets !
                </S.Button>
                <S.InputLabel
                  target='_blank'
                  rel='noopener'
                  href={`https://mumbai.polygonscan.com/address/${event.contractAddress}`}
                >
                  Création des billets sur le contrat: {event.contractAddress}
                </S.InputLabel>
              </S.TicketCreatorForm>
            )}
          </GenericStyle.Row>
        ) : (
          <GenericStyle.Row>
            <FaCheckCircle size={50} color={'54D2FD'} />
            <a style={{ color: 'white' }}>
              Vos billets ont été crées avec succès !
            </a>
          </GenericStyle.Row>
        )}
      </div>
    </S.CardContainer>
  )
}
