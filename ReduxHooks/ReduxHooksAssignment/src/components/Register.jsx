import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {getUser,addSingleUser} from '../Redux/UserInfo/action'
import { useNavigate } from "react-router-dom";


export const RegistrationForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log(user)
  const submitHandler = () => {
    //console.log("hi");
    const payload = user;
    axios.post("http://localhost:8000/user", payload).then(()=>{
       // console.log('hii')
        dispatch(getUser());
    })
    dispatch(addSingleUser(payload))
    navigate('/')
};
  const handleChange = (e) => {
    //console.log(e.target.value)
    e.preventDefault();
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <label>First Name </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name </label>
          <input
            type="text"
            name=""
            id="lastName"
            placeholder="LastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div class="footer">
        <button
          type="submit"
          onClick={() => {
            submitHandler();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
