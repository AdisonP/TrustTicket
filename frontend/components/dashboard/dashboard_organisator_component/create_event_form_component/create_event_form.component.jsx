import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'
import Loader from '../../../loader/loader'
import { FaArrowLeft } from 'react-icons/fa'
import { globalRequest } from '../../../../utils/validationForm/networkServices/networkServices'
import * as S from './create_event_form.styled'
import axios from 'axios'
import UploadComponent from '../../../upload/upload.component'
import { displayEventCreator } from '../../../../store/features/dashboard/dashboard'
import { Icon } from '@iconify/react'

export default function CreateEvent() {
  const auth = useSelector((state) => state.jwt.auth)
  const displayCreator = useSelector(
    (state) => state.dashboard.displayCreateEvent
  )
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState()
  const [step, setStep] = useState(0)
  const [eventId, setEventId] = useState(undefined)
  const [newArtist, setnewArtist] = useState(false)
  const [loader, setLoader] = useState(false)
  const [categories, setCategories] = useState()
  const [artists, setArtists] = useState()
  // const {register,formState:{errors,isValid,isSubmitting}}
  React.useEffect(() => {
    setFormData({
      ...formData,
      id_seller: auth.id,
      jwt: auth.accessToken,
      organisatorWallet: auth.walletAddress,
    })

    const getCategories = async () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}api/categorie`)
        .then((res) => {
          setCategories(res.data)
        })
        .catch((err) => console.log(err))
    }

    const getArtists = async () => {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}api/artist/sort`)
        .then((res) => {
          setArtists(res.data)
        })
        .catch((err) => console.log(err))
    }

    if (!categories) {
      getCategories()
    }
    if (!artists) {
      getArtists()
    }
  }, [])

  const createEvent = (e) => {
    setLoader(true)
    e.preventDefault()

    globalRequest('POST', 'api/events', formData, auth.accessToken).then(
      (res) => {
        if (!res) {
          setLoader(false)
          setError('Server Error, please contact the CTO')
        } else {
          if (res.status != 200) {
            if (res.data) {
              setLoader(false)
              setError(res.data.message)
            }
          }

          if (res.status === 200) {
            setEventId(res.data.id)
            setStep(1)
            setError()
          }
        }
      }
    )
  }
  return (
    <S.Main style={{ flexDirection: 'column' }}>
      {step === 0 && (
        <S.GoBackButton
          type='button'
          onClick={() => dispatch(displayEventCreator(!displayCreator))}
        >
          <FaArrowLeft color={'#212121'} size={'2em'} />
        </S.GoBackButton>
      )}
      {error && <S.ErrorField>{error}</S.ErrorField>}
      <S.BoxForm>
        {step == 0 && (
          <S.Form>
            {loader ? (
              <>


                <Loader />
                <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <a style={{ color: 'white', fontSize: "larger" }}>
                      Création du contrat sur la blockchain, merci de patienter.
                    </a>
                  </div>




                </div>
              </>
            ) : (
              <>
                <S.Label for='event_name'>Nom de l'événement</S.Label>
                <S.InputForm
                  name='event_name'
                  placeholder="Quel est le nom de l'événement?"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                  }}
                />

                <S.Label for='event_type'>Catégorie d'événement</S.Label>
                <S.TypeSelect
                  name='event_type'
                  placeholder="Quel est le type d'événement ?"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, categorie: e.target.value })
                  }}
                >
                  <option style={{ color: 'gray' }} disabled hidden selected>
                    Choississez une catégorie
                  </option>
                  {categories?.map((val, index) => (
                    <option
                      key={index}
                      style={{ color: 'white' }}
                      value={val.name}
                    >
                      {val.categorie_name}
                    </option>
                  ))}
                </S.TypeSelect>

                <S.Label for='event_dates'>
                  Date et heure d'ouverture de l'événement{' '}
                </S.Label>
                <S.InputForm
                  type='datetime-local'
                  name='event_dates'
                  required
                  placeholder="Quand se déroule l'événement ?"
                  onChange={(e) => {
                    setFormData({ ...formData, event_date: e.target.value })
                  }}
                />

                <S.Label for='event_location'>
                  Localisation de l'événement
                </S.Label>
                <S.InputForm
                  name='event_location'
                  required
                  placeholder="Où se déroule l'événement ?"
                  onChange={(e) => {
                    setFormData({ ...formData, localisation: e.target.value })
                  }}
                />

                <>
                  {!newArtist ? (
                    <>
                      <S.Label for='event_artists'>
                        Sélection des Artistes
                      </S.Label>
                      <S.ArtistSelect
                        name='event_artists'
                        required
                        placeholder="Quels artistes seront présent à l'événement ?"
                        onChange={(e) => {
                          setFormData({ ...formData, artist: e.target.value })
                        }}
                      >
                        <option disabled hidden selected>
                          Choisir un Artiste
                        </option>
                        {artists?.map((val, index) => (
                          <option
                            key={index}
                            style={{ color: 'white' }}
                            value={val.name}
                          >
                            {val.name}
                          </option>
                        ))}
                      </S.ArtistSelect>
                      <>
                        <Icon
                          icon='mdi:plus-box-outline'
                          style={{
                            fontSize: '100px',
                            color: '#7e62e2',
                            '&:hover': {
                              color: '#7e62e2',
                              cursor: 'pointer',
                            },
                          }}
                          onClick={() => setnewArtist(!newArtist)}
                        />
                      </>
                    </>
                  ) : (
                    <>
                      <S.Label for='event_artists'>Nouvel Artiste</S.Label>
                      <S.InputForm
                        required
                        placeholder="Ajoutez le nom d'un artiste"
                        onChange={(e) => {
                          setFormData({ ...formData, artist: e.target.value })
                        }}
                      />
                      <>
                        <Icon
                          icon='mdi:arrow-u-left-bottom'
                          style={{ fontSize: '100px', color: '#7e62e2' }}
                          onClick={() => setnewArtist(!newArtist)}
                        />
                      </>
                    </>
                  )}
                </>

                <S.Label for='event_description'>
                  Description de l'événement
                </S.Label>
                <S.DescriptionInput
                  name='event_name'
                  required
                  placeholder="Décrivez l'événement"
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value })
                  }}
                />

                <S.SubmitButton
                  disabled={!formData}
                  onClick={createEvent}
                  type='submit'
                >
                  Prochaine étape
                </S.SubmitButton>
              </>
            )}
          </S.Form>
        )}

        {step === 1 && (
          <S.Row style={{ padding: '30px' }}>
            <S.Row
              style={{ margin: '20px', color: 'white', alignItems: 'center' }}
            >
              Merci de soummettre une image en haute résolution pour valider la
              création de votre événement.
            </S.Row>
            <S.Row style={{ color: '#d95d04' }}>
              ⚠ Les événements sans images ne pourront pas être affichés dans le
              MarketPlace ! ⚠
            </S.Row>

            <S.Row
              style={{
                margin: '20px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <UploadComponent id_event={eventId} />
            </S.Row>
          </S.Row>
        )}
      </S.BoxForm>
    </S.Main>
  )
}
