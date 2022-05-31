import axios from "axios";
import React, { useState } from "react";

const AddCountry = () => {
   const [country, setCountry] = useState("");
   const handleChange = (e) => {
      setCountry({ ...country, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("http://localhost:8080/countries", country)
         .then(alert("Added"));
   };
   return (
      <div className="form">
         <h1 style={{marginBottom: "4%"}}>Add Country</h1>
         <form>
            <label htmlFor="countryname"></label>
            <input name="countryName" onChange={handleChange}></input>
            <input type="submit" placeholder="Submit" onClick={handleSubmit} />
         </form>
      </div>
   );
};

export default AddCountry;
