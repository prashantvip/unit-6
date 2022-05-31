import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";

const AddCity = () => {
   const [formData, setFormData] = useState({
      city: "",
      country: "",
      population: "",
   });

   const [countries, setCountries] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:8080/countries").then(({ data }) => {
         return setCountries(data);
      });
   }, []);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("http://localhost:8080/cities", formData)
         .then(alert(`Added ${formData.city}!`));
   };
   return (
      <div>
         <form
            style={{
               width: "30%",
               margin: "auto",
               border: "1px solid #d1d1d1",
               padding: "2%",
            }}
         >
            <Form>
               {" "}
               <h3 style={{ marginBottom: "4%" }}>Add City</h3>
               <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>City Name</Form.Label>
                  <Form.Control
                     type="text"
                     placeholder="Enter city"
                     name="city"
                     onChange={handleChange}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Country Name</Form.Label>
                  <Form.Select onChange={handleChange} name="country">
                     <option>-----</option>
                     {countries.map((e) => {
                        return (
                           <option key={e.key} name={e.name}>
                              {e.name}
                           </option>
                        );
                     })}
                  </Form.Select>
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Population</Form.Label>
                  <Form.Control
                     type="text"
                     placeholder="Enter Population"
                     name="population"
                     onChange={handleChange}
                  />
               </Form.Group>
               <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                     border: "none",
                     padding: "2% 8%",
                     backgroundColor: "steelblue",
                     color: "white",
                  }}
               >
                  Submit
               </button>
            </Form>
         </form>
      </div>
   );
};

export default AddCity;
