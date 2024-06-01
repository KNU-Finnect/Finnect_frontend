import axios, { AxiosResponse } from 'axios';

import { BASE_URI } from '@finnect/constants/URL';

export async function postSignup(
  username: string,
  password: string,
  email: string,
  firstName: string,
  lastName: string
): Promise<AxiosResponse> {
  const url = `${BASE_URI}/users/signup`;

  try {
    const response = await axios.post(
      url,
      {
        username,
        password,
        email,
        firstName,
        lastName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
}

export async function checkEmail(email: string): Promise<AxiosResponse> {
  const url = `${BASE_URI}/users/email-auth`;

  try {
    console.log(email);
    const response = await axios.post(
      url,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during email check:', error);
    throw error;
  }
}

export async function checkEmailCode(
  email: string,
  codeNumber: number
): Promise<AxiosResponse> {
  const url = `${BASE_URI}/users/email-auth/signup`;
  try {
    console.log(email);
    console.log(codeNumber);
    const response = await axios.post(
      url,
      { email, codeNumber },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during email code check:', error);
    throw error;
  }
}
