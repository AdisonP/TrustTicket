import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import Loader from "../loader/loader"
// FORM VALIDATION
import validationFormUser from "../../utils/validationForm/Login/validationFormUser";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// STYLES
import { BoxForm, Button, Form, InputForm, Main } from "./login_form.styled";
import { userSignIn } from "../../utils/validationForm/networkServices/networkServices";
import { Row } from "../register/register.styled";
import { useDispatch } from 'react-redux'
import { setJWT } from '../../store/features/jwt/jwt'
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter()
  const dispatch = useDispatch()
  // CONST
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
  // FORM CONST
  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationFormUser),
  });

  const signIn = (e) => {
    e.preventDefault();

    (userSignIn(formData)).then((res) => {
      if (res.status != 200) {
        setError(res.data)
      } else if (res.status === 200) {
        dispatch(setJWT(res.data))
        if (res.data.role === 'organisator') {
          router.push('/dashboard')
        } else {
          router.push('/marketplace')
        }

      }
    })
  };

  return (
    <Main>
      <div>
        <Image
          src="/TTTransparent.png"
          alt="Trust Ticket Logo"
          width={150}
          height={150}
        />
      </div>
      {
        !loading ? <>

          {error && (<Row style={{ "color": "red" }}>{error.message}</Row>)}
          <BoxForm>
            <Form>
              <InputForm
                placeholder="Nom d'utilisateur"
                {...register("username")}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  });
                }}
              />
              <InputForm
                placeholder="Mot de passe"
                {...register("password")}
                type="password"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
              />
              <Button onClick={signIn} type="submit" disabled={!formData}>
                Se connecter !
              </Button>
            </Form>
          </BoxForm>
        </> :
          <Loader />
      }

    </Main>
  );
}