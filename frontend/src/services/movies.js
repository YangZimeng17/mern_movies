import axios from 'axios'

class MovieDataService {
    api_url = "http://localhost:5000/api/v1"

    getAll(page=0) {
        return axios.get(`${this.api_url}/movies?page=${page}`)
    }

    get(id) {
        return axios.get(`${this.api_url}/movies/id/${id}`)
    }

    find(query, by="title", page=0) {
        return axios.get(`${this.api_url}/movies?${by}=${query}&page=${page}`)
    }

    createReview(data) {
        return axios.post(`${this.api_url}/movies/review`, data)
    }

    updateReview(data) {
        return axios.put(`${this.api_url}/movies/review`, data)
    }

    deleteReview(id, userId) {
        return axios.delete(`${this.api_url}/movies/review`, {data:{review_id: id, user_id: userId}})
    }

    getRatings() {
        return axios.get(`${this.api_url}/movies/ratings/`)
    }
}

export default new MovieDataService()