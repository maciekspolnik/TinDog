import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";




export const getUserBoard = () => {
  return axios.get(API_URL + "user",
      { headers: authHeader() });
};

export const getUserDetailsById = (id) => {
  return axios.get("http://localhost:8080/api/test/idetails?index=1",
      { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin",
      { headers: authHeader() });
};

export const postUserDetails = (id, dog_name, owner, img_url, contact) => {
    return axios.post(API_URL+"details?index="+id, {
        dog_name,
        img_url,
        owner,
        contact
      },
        {headers: authHeader()})
};

export const getAllUserDetails = () => {
    return axios.get('http://localhost:8080/api/test/details/all',
        {headers: authHeader()})
};

export const createNewMatch = (idMatching, idMatched) => {
    return axios.post('http://localhost:8080/api/matches/add',
        {
            idMatching,
            idMatched
        }, {headers: authHeader()}
        )
}

export const deleteMatches = (id) => {
    return axios.delete('http://localhost:8080/api/matches/delete?id='+id,
        {headers: authHeader()})
}

export default {
    getUserDetailsById,
    getUserBoard,
    getAdminBoard,
    postUserDetails,
    getAllUserDetails
};