const DEFAULT_SERVER = 'https://pacific-atoll-30835.herokuapp.com/';

export async function loginWithEmailAndPassword(emailIncome, passwordIncome) {
  try {
    let response = await fetch(`${DEFAULT_SERVER}rest-auth/login/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailIncome,
        password: passwordIncome,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function loginWithFacebook(token, appCode) {
  try {
    let response = await fetch(`${DEFAULT_SERVER}rest-auth/facebook/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: token,
        code: appCode,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function loginWithGoogle(token) {
  try {
    let response = await fetch(`${DEFAULT_SERVER}rest-auth/google/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: token,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function registration(
  usernameIncome,
  emailIncome,
  passwordIncome,
) {
  try {
    let response = await fetch(`${DEFAULT_SERVER}rest-auth/registration/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameIncome,
        email: emailIncome,
        password1: passwordIncome,
        password2: passwordIncome,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}