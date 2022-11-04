import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import Loader from "../../loader/loader";

// FORM VALIDATION
import validationFormUser from "../../../utils/validationForm/Register/validationFormUser"
import { yupResolver } from "@hookform/resolvers/yup";

// STYLES
import { BoxForm, Button, Form, InputForm, Main, Row, MetaMaskButton, WalletAddress } from "./register_form_styled";
import { userSignUp } from "../../../utils/validationForm/networkServices/networkServices";

export default function RegisterForm(props) {
  const router = useRouter()
  const [error, setError] = useState()
  // CONST
  const [formData, setFormData] = useState({});
  const [walletAccount, setWallet] = useState();
  const [metaMaskText, setMetaText] = useState();
  const [loading, setLoading] = useState(false)

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          setWallet(accounts[0])
        }).catch(reason => {
          console.log(reason)
        })
    } else {
      window.open('https://metamask.io/download/', '_blank')
    }
  }

  const getCurrentWallet = () => {
    if (window.ethereum) {
      setMetaText('Connectez votre wallet MetaMask ! ')
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          setWallet(accounts[0])
        }).catch(reason => {
          console.log(reason)
        })
    } else {
      setMetaText('Cliquez ici pour installer metamask sur votre navigateur !')
    }
  }

  useEffect(() => {

    getCurrentWallet()

    setFormData({
      ...formData,
      role: props.role
    })
    console.log(props.role)


  }, [])

  useEffect(() => {

    if (walletAccount) {
      setFormData({
        ...formData,
        wallet_address: walletAccount

      })
      setMetaText("Wallet déja connecté !")
    }


  }, [walletAccount])

  // FORM CONST
  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationFormUser),
  });

  //Uses the signup network service and handles response
  const signUp = (e) => {
    setLoading(true)
    e.preventDefault();

    (userSignUp(formData)).then((res) => {
      if (res.status != 200) {
        if (res.data) {
          try {
            setError(res.data)
            setLoading(false)
          } catch (err) {
            setLoading(false)
            alert(err)
          }

        } else {
          setLoading(false)
          setError("Notre serveur semble avoir un problème, nous somme déja sur le coup !")
        }

      } else if (res.status === 200) {
        router.push('login')
      }

    })

  };

  return (
    <Main>
      {
        !loading ? <>
          {
            error && (<Row>{error.message}</Row>)
          }

          <MetaMaskButton onClick={connectWallet} disabled={!walletAccount ? false : true}>
            <Icon style={{ 'paddingLeft': '5px' }} fontSize={"25px"} icon="logos:metamask-icon" />
            <a>{metaMaskText}</a>
          </MetaMaskButton>

          {walletAccount && <Row><WalletAddress>Votre wallet :{walletAccount} à été lié avec succès !</WalletAddress></Row>}
          <BoxForm>

            {
              props.role === 'user' && (

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
                    placeholder="Adresse Email"
                    {...register("email")}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}
                  />

                  <InputForm
                    placeholder="Mot de passe"
                    {...register("password")}
                    type='password'
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      });
                    }}
                  />


                  <Button onClick={signUp} type="submit">
                    S'inscrire !
                  </Button>
                </Form>

              )
            }



            {props.role === 'organisator' && (

              <Form>
                <InputForm
                  placeholder="Nom du responsable"
                  {...register("name")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                />
                <InputForm
                  placeholder="Prénom du responsable"
                  {...register("firstname")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      firstname: e.target.value,
                    });
                  }}
                />
                <InputForm
                  placeholder="Nom d'utilisateur de l'organisateur"
                  {...register("username")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      username: e.target.value,
                    });
                  }}
                />

                <InputForm
                  placeholder="Adresse email"
                  {...register("email")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                />
                <InputForm
                  placeholder="Adresse de l'organisation"
                  {...register("address")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    });
                  }}
                />

                <InputForm
                  placeholder="Mot de passe"
                  {...register("password")}
                  type='password'
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />

                <InputForm
                  placeholder="Numéro de téléphone du responsable"
                  {...register("phone")}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    });
                  }}
                />

                <Button onClick={signUp} type="submit" disabled={!formData || !walletAccount}>
                  S'inscrire !
                </Button>
              </Form>
            )}

          </BoxForm>
        </> : <Loader />
      }

    </Main>
  );
}
