import axios from "axios";

export default {
    api: function (){
        return axios.get("https://randomuser.me/api/?results=200")
    }
}