import axios from 'axios'
import humps from 'humps'

const API_URL = import.meta.env.VITE_API_URL
const CORE_URL = `${API_URL}/core`
const VERIFY_CODE_URL = `${CORE_URL}/verifycode/`

const ACCOUNTS_URL = `${API_URL}/accounts`
const VERIFY_SPONSOR_ACCOUNT_NUMBER_URL = `${ACCOUNTS_URL}/verifysponsoraccountnumber/`
const VERIFY_PARENT_ACCOUNT_NUMBER_URL = `${ACCOUNTS_URL}/verifyparentaccountnumber/`
const VERIFY_PARENT_SIDE_URL = `${ACCOUNTS_URL}/verifyparentside/`
const VERIFY_EXTREME_SIDE_URL = `${ACCOUNTS_URL}/verifyextremeside/`
const VERIFY_ACCOUNT_NAME_URL = `${ACCOUNTS_URL}/verifyaccountname/`

const USER_URL = `${API_URL}/users`
const VERIFY_USERNAME_URL = `${USER_URL}/checkusername/`
const VERIFY_EMAIL_URL = `${USER_URL}/checkemailaddress/`

const CREATE_MEMBER_URL = `${ACCOUNTS_URL}/create/`
const UPGRADE_MEMBER_URL = `${ACCOUNTS_URL}/upgrade/`

export const verifycode = (values) => {
  return axios.post(VERIFY_CODE_URL, humps.decamelizeKeys(values))
}

export const createMember = (member) => {
  return axios.post(`${CREATE_MEMBER_URL}`, humps.decamelizeKeys(member))
}

export const verifyExtremeSide = (values) => {
  return axios.post(`${VERIFY_EXTREME_SIDE_URL}`, humps.decamelizeKeys(values))
}

export const verifySponsorAccountNumber = (value) => {
  return axios.post(`${VERIFY_SPONSOR_ACCOUNT_NUMBER_URL}`, {sponsor_account_id: value})
}

export const verifyParentAccountNumber = (value) => {
  return axios.post(`${VERIFY_PARENT_ACCOUNT_NUMBER_URL}`, {parent_account_id: value})
}

export const verifyParentSide = (accountId, parentSide) => {
  return axios.post(`${VERIFY_PARENT_SIDE_URL}`, {
    parent_account_id: accountId,
    parent_side: parentSide,
  })
}

export const verifyAccountName = (firstName, middleName, lastName) => {
  return axios.post(`${VERIFY_ACCOUNT_NAME_URL}`, {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
  })
}

export const verifyUsername = (value) => {
  return axios.post(`${VERIFY_USERNAME_URL}`, {username: value})
}

export const verifyEmailAddress = (value) => {
  return axios.post(`${VERIFY_EMAIL_URL}`, {email_address: value})
}

export const upgradeMember = (member) => {
  return axios.post(`${UPGRADE_MEMBER_URL}`, humps.decamelizeKeys(member))
}
