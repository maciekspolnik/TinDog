import axios from 'axios'

class UserService{

    getUsers(){
        return axios.get('http://localhost:8080/users/all')
    }
    getUsersByID(id){
        return axios.get('http://localhost:8080/users/?index='+id)

    }
}

export default new UserService();