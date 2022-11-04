import * as S from '../register/register.styled'
import { FaArrowLeft, FaUser, FaUserTie } from 'react-icons/fa'
import { useState, useEffect } from 'react'

import RegisterForm from './register_form_component'
import { genericInput } from '../../styles/generic_components.styled'



export default function RegisterComponent() {
    const [registerChoice, setRegisterChoice] = useState(undefined)

    useEffect(() => {
        setRegisterChoice(undefined)
    }, [])




    return (
        <S.Main>

            {!registerChoice && (<S.Row>
                <S.Col>
                    <S.ChoiceButton type='button' onClick={() => setRegisterChoice("user")}>
                        <S.Row><FaUser size={"5em"} color={"#ffffff"} /></S.Row>
                        <S.Row><S.ChoiceButtonLabel>Inscription Utilisateur</S.ChoiceButtonLabel></S.Row>
                    </S.ChoiceButton>
                </S.Col>

                <S.Col>
                    <S.ChoiceButton type='button' onClick={() => setRegisterChoice("organisator")}>
                        <S.Row><FaUserTie size={"5em"} color={"#ffffff"} /></S.Row>
                        <S.Row><S.ChoiceButtonLabel>Inscription Organisateur</S.ChoiceButtonLabel> </S.Row>
                    </S.ChoiceButton>
                </S.Col>
            </S.Row>)
            }


            {
                registerChoice && (
                    <>
                        <S.GoBackRow><S.GoBackButton type='button' onClick={() => setRegisterChoice(undefined)}><FaArrowLeft color={"#212121"} size={"2em"} /></S.GoBackButton></S.GoBackRow>

                        {registerChoice === 'user' && <RegisterForm role={"user"} />}

                        {registerChoice === 'organisator' && <RegisterForm role={"organisator"} />}
                    </>
                )
            }

        </S.Main>
    )

}