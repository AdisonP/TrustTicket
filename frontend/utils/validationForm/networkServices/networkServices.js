import axios from "axios";

export function userSignUp(formData) {
  const promise = axios.post(
    process.env.NEXT_PUBLIC_API_URL + "api/auth/signup",
    formData
  );

  const data = promise
    .then((response) => response)
    .catch((err) => err.response);

  return data;
}

export function userSignIn(formData) {
  const promise = axios.post(
    process.env.NEXT_PUBLIC_API_URL + "api/auth/signin",
    formData
  );
  const data = promise
    .then((response) => response)
    .catch((err) => err.response);

  return data;
}

export function getRequest(url, token) {
  return axios.get(process.env.NEXT_PUBLIC_API_URL + url, {
    headers: {
      Authorization: "Bearer " + token,
    }
  })
}

export function putRequest(url, data, token) {
  return axios.put(process.env.NEXT_PUBLIC_API_URL + url, data, { headers: { Authorization: "Bearer " + token } })
}

export function deleteRequest(url, token) {
  return axios.put(process.env.NEXT_PUBLIC_API_URL + url, { headers: { Authorization: "Bearer " + token } })
}


export function globalRequest(method, url, formData, authToken) {
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  const promise = axios(
    {
      method: method,
      url: process.env.NEXT_PUBLIC_API_URL + url,
      data: formData,
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }

  )

  const data = promise
    .then((response) => response)
    .catch((err) => err.response);

  return data;
}

export function globalGetRequest(method, url, authToken) {
  const headers = {

    Authorization: `Bearer ${authToken}`,
    withCredentials: true,
    credentials: true,
  };
  const promise = axios(
    {
      method: method,
      url: process.env.NEXT_PUBLIC_API_URL + url,
    },
    {
      headers: headers,
    }
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      err.response;
    });


  const data = promise
    .then((response) => response)
    .catch((err) => err.response);

  return data;
}
