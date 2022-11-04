import React, { useState } from 'react'
import {
  UploadBox,
  UploadLabel,
  UploadInput,
  UploadText,
  UploadButton,
} from './upload.styled'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { globalRequest } from '../../utils/validationForm/networkServices/networkServices'
import { displayEventCreator } from '../../store/features/dashboard/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export default function UploadComponent(props) {
  const [file, setFile] = useState(null)
  const [confirm, setConfirm] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const displayCreator = useSelector(
    (state) => state.dashboard.displayCreateEvent
  )
  const handleChange = (e) => {
    setFile(e.target.files[0])
    setConfirm(!confirm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setConfirm(!confirm)

    const formData = new FormData()
    if (props.id_user) {
      const id = props.id_user
      formData.append('file', file)
      formData.append('id_user', id)
      globalRequest('post', 'api/upload/user', formData)
    }
    if (props.id_event) {
      const id = props.id_event
      formData.append('file', file)
      formData.append('id_event', id)
      globalRequest('post', 'api/upload/event', formData)
        .then(() => {
          dispatch(displayEventCreator(!displayCreator))
        })
        .catch((err) => console.log(err))
    }
    if (props.id_artist) {
      const id = props.id_artist
      formData.append('file', file)
      formData.append('id_artist', id)
      globalRequest('post', 'api/upload/artist', formData)
    }
  }

  return (
    <UploadBox>
      <UploadLabel>
        <AiOutlineCloudUpload
          size={50}
          color='#54D2FD'
          style={{ cursor: 'pointer' }}
        />
        <UploadInput
          type='file'
          accept='image/*'
          placeholder='upload'
          onChange={handleChange}
        />
      </UploadLabel>
      {confirm ? (
        <UploadButton onClick={handleSubmit}>Enregistrer l'image</UploadButton>
      ) : (
        <UploadText>Uploader une Image</UploadText>
      )}
    </UploadBox>
  )
}
