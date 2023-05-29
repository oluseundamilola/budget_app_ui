import axios from "axios"
import Cookies from 'js-cookie'


const DIVISION_BASE_URL = "http://localhost:8080/api/budget/"

class RequestService{
    getRequestByDivisionId(division_id){
        const tokenString = Cookies.get('_auth')
        return axios.get(DIVISION_BASE_URL + "get_requests/" +division_id,{headers: { "Authorization" :`Bearer ${tokenString}` }} )
    }
}

export default new RequestService()