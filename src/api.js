import axios from 'axios'

const BASE_URL = process.env.API_ENDPOINT || 'http://localhost:3000/';

const api = {
    getGems: async ({ query,page }) => {
        const url =`${BASE_URL}api/v1/search.json`
        try {
            const res = await axios.get(url, {params: {query, page}})
            return res.data
        } catch(err) {
            console.log('error! ', err)
        }
    }
}

export default api