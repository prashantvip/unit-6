export const ADDUSER = 'ADDUSER'
export const ADDSINGLEUSER = 'ADDSINGLEUSER'
import axios from 'axios'
export const addUser =(user)=>{
    return {
        type: ADDUSER,
        payload:user
    }
}

export const addSingleUser = (data)=>{
    return {
        type: ADDSINGLEUSER,
        payload:data
    }
}
export const getUser =()=>async(dispatch)=>{
    axios.get('http://localhost:8000/user').then(function(response){
       dispatch(addUser(response.data))
    })
}