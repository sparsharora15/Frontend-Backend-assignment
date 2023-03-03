import axios from 'axios'
import { BASE_URL } from './Base-URL'
export const getUserData = async () => {
    return await axios.get(BASE_URL + 'getaAll')
}
export const editUserData = async (data) => {
    return await axios.post(BASE_URL + 'editUser',data)
}
export const deleteUserData = async (id) => {
    return await axios.put(BASE_URL + `deleteUser?id=${id}`)
}
export const likeUserData = async (id) => {
    return await axios.post(BASE_URL + `likeDetails?id=${id}`)
}