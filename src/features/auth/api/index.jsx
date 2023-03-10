import axios from 'axios'
import humps from 'humps'

const API_URL = import.meta.env.VITE_API_URL

const AUTH_URL = `${API_URL}/vanguard`
const GET_USER_BY_ACCESSTOKEN_URL = `${AUTH_URL}/whoami/`
const LOGIN_URL = `${AUTH_URL}/login/`
const REFRESH_URL = `${AUTH_URL}/refresh/`
const REQUEST_PASSWORD_URL = `${AUTH_URL}/forgot_password/`

const CORE_URL = `${API_URL}/core`
const VERIFY_CODE_URL = `${CORE_URL}/verifycode/`

const ACCOUNTS_URL = `${API_URL}/accounts`
const GET_ACCOUNTS_URL = `${ACCOUNTS_URL}/getaccount`

export function login(username, password) {
  return axios.post(LOGIN_URL, {username, password})
}

export function refreshToken(refresh) {
  return axios.post(`${REFRESH_URL}`, {
    refresh,
  })
}

export function requestPassword(username) {
  return axios.post(`${REQUEST_PASSWORD_URL}`, {
    username,
  })
}

export function getUserByToken(token) {
  return axios.post(`${GET_USER_BY_ACCESSTOKEN_URL}`)
}

export function verifycode(values) {
  return axios.post(VERIFY_CODE_URL, humps.decamelizeKeys(values))
}

export function getAccount() {
  return axios.get(`${GET_ACCOUNTS_URL}`).then((d) => humps.camelizeKeys(d.data))
}
