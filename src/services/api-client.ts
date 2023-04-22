import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3dcf20f00b0f4c4bac0e074ee71bc95a'
    }
})