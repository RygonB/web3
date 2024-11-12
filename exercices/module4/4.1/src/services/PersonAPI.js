import axios from 'axios'

const baserUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baserUrl).then(response => response.data);

const PersonAPI = {
    getAll
}

export default PersonAPI;