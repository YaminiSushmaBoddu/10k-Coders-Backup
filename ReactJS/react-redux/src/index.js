import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const defaultState={
  users:["Yamini","Salavuddin","Ravi","Ram"]
}
export const addUser=()=>{
  return{
    type: "ADDUSER",
  payload: "SriRam"
  }
}
export const deleteUser=(user)=>{
  return{
    type:"DELETEUSER",
    payload:user
  }
}
export const reducer=(state=defaultState, action)=>{
  switch(action.type){
   case "ADDUSER":
  let newUser=[...state.users]
   newUser.push(action.payload)  
    return {...state,users:newUser}
     
    case "DELETEUSER":
      let updateUsers=state.users.filter((user)=>user!== action.payload);
      return{...state,users:updateUsers}
    
    default:
      return state;
  }
}
const store=createStore(reducer);
console.log(store)
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
