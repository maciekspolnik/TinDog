import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/";


export const getUserDetailsById = (id) => {
  return axios.get(
      API_URL+"idetails?index="+id,
      { headers: authHeader() });
};

export const postUserDetails = (id, dog_name, owner, img_url, contact) => {
    return axios.post(
        API_URL+"details?index="+id,
        {
            dog_name,
            img_url,
            owner,
            contact
        },
        {headers: authHeader()})
};

export const getList = (id) => {
    return axios.get(API_URL+"list?index="+id,
        {headers: authHeader()})
}

export const createNewMatch = (idMatching, idMatched) => {
    return axios.post(API_URL+"matches/add",
        {
            idMatching,
            idMatched
        }, {headers: authHeader()}
        )
}

export const deleteMatches = (id) => {
    return axios.delete(API_URL+"matches/delete?id="+id,
        {headers: authHeader()})
}

export default{
    getUserDetailsById,
    getList,
    postUserDetails,
    deleteMatches,
    createNewMatch
}