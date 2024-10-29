import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)

    return request.then(responce => responce.data)
    .catch(error => {
        console.error('Error fetching data:', error)
      })
}
const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(responce => responce.data)
}
const delPerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(responce => responce.data)
}
const update = (id, updatedPerson) => {
 const request = axios.put(`${baseUrl}/${id}`, updatedPerson)
 return request.then(responce => responce.data)
}


export default {getAll, create, delPerson, update}