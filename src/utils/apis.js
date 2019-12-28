import axios from 'axios'


//PUJAS
export const baseUrl = 'https://czla69q7ql.execute-api.us-east-1.amazonaws.com/dev'
export const getAllPujas = async (filter = {}) => {
    const result =await axios.get(`${baseUrl}/pujas`)
    return result.data.data 

}
export const getPujaById = async (id) => {
    return await axios.get(`${baseUrl}/pujas/${id}`)
}

export const   payment = async(id,token) => {
    console.log('params', token,id)
    return await axios.post(`${baseUrl}/payment`, {token,id})
}
