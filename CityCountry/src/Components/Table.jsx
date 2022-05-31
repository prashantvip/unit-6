import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from "react-redux";
import {addCities} from "../Redux/action";
import {deleteCity} from "../Redux/action";

const TableFn = () => {
  const [cities, setCities] = useState([]);
  const [sortedCities, setSortedCities] = useState([]);

  const redCities = useSelector((store) => store.cities);
  const dispatch = useDispatch();

  const getCities = async () => {
    axios.get("http://localhost:8080/cities").then(({data}) => {
      setCities(data);
      setSortedCities(data);
      dispatch(addCities(data));
    });
  };

  const handleFilter = (e) => {
    const {value} = e.target;
    setSortedCities(
      cities.filter((e) => {
        return e.country === value;
      })
    );
  };

  const handleSort = (e) => {
    let sorted;
    if (e.target.value === "Ascending") {
      sorted = cities.sort((a, b) => {
        return a.population - b.population;
      });
    } else {
      sorted = cities.sort((a, b) => {
        return b.population - a.population;
      });
    }
    setSortedCities([...sorted]);
  };

  useEffect(() => {
    getCities();
  }, []);
  return (
    <div>
      <div className="flex">
        <label htmlFor="filterCountry">Filter by Country</label>
        <select name="filterCountry" onChange={handleFilter}>
          {cities.map((e) => {
            return <option>{e.country}</option>;
          })}
        </select>
        <label htmlFor="sort">Sort</label>
        <select name="sort" onChange={handleSort}>
          <option name="asc">Ascending</option>
          <option name="desc">Descending</option>
        </select>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedCities.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.country}</td>
                <td>{e.city}</td>
                <td>{e.population}</td>
                <td>
                  <button className="btn">Edit</button>
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(deleteCity(e.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableFn;
