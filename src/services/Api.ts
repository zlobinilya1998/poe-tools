import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api.pathofexile.com'
})

export default Api;
