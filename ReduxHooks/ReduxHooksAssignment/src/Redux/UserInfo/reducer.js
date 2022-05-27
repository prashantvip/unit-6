import {ADDSINGLEUSER, ADDUSER} from './action'
const init = {
    user:[],
    singleUser :{}
}

export const userReducer = (store=init,{type,payload})=>{
    switch(type){
        case ADDUSER:return {...store,user:payload}
        case ADDSINGLEUSER:return{...store,singleUser:payload}
        default:return {...store}
    }

}