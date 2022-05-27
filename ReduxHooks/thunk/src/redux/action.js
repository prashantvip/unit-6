import axios from "axios"
export const TOKEN = "TOKEN";
export const TASKS = "TASKS";
export const LIST = "LIST" 
export const token =(data)=>{
return {
    type:TOKEN,
    payload:data
}
}

export const logger = (details)=> async(dispatch)=>{
    axios.post('https://reqres.in/api/login', details)
          .then(function (response) {
            console.log(response.data);
            dispatch(token(response.data))
          })

}

export const Tasks =(data)=>{
  return {
      type:TASKS,
      payload:data
  }
  }

  export const taskCreator = (task)=> async(dispatch)=>{
    axios.post('http://localhost:8080/tasks', task)
          .then(function (response) {
            dispatch(Tasks(response.data))
          })

}

export const List =(data)=>{
  return {
      type:LIST,
      payload:data
  }
  }

  export const getList = ()=> async(dispatch)=>{
    axios.get('http://localhost:8080/tasks')
          .then(function (response) {
            dispatch(List(response.data))
          })
}