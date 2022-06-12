import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';

import "./Movies.css"
import Pagination from './Pagination';




const Movies = () => {

    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(true);

    let [searchParams, setSearchParams] = useSearchParams();

    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

    const [limit, setLimit] = useState(Number(searchParams.get("limit")) || 3);

    const [yearSort, setYearSort] = useState(searchParams.get("yearSort") || "desc"); // set sort order

 
    const [filterType, setFilterType] = useState(searchParams.get("filterType") ||[]); // set filter by type


    useEffect(() => {

        getData(page, yearSort, limit,filterType);

        setSearchParams({ page, limit , filterType,yearSort });

    }, [page, yearSort, limit ,filterType, setSearchParams]);


    // useEffect(() => {

    // }, [page, yearSort ,limit, setSearchParams])




    const getData = async (page, yearSort, limit , filterType) => {

        setLoding(true);

        
        axios({
            url: "http://localhost:8080/movies",
            method: "GET",
            params: {
                _page: page,
                _limit: limit,
                _sort: "Year",
                _order: `${yearSort}`,
                 Type :filterType,
               


            }
        }).then(res => {
            setData(res.data);

            setLoding(false)
        }).catch(err => {

            setLoding(false);
            console.log({ err: err.message });

        })

    }



    console.log("data", data)


    return (
        <>

            <div>
                {loding && <div>Loding....</div>}

                <div className='fbox'>


                    {/* -------------Sort--------------- */}

                    <div>
                        <button disabled={yearSort === "desc"} onClick={() => setYearSort("desc")}>Sort By DESC Year</button>
                        <button disabled={yearSort === "asc"} onClick={() => setYearSort("asc")}>Sort By ASC Year</button>
                    </div>

                 
                    {/* ----------------Pegination--------------- */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button disabled={page === 1} onClick={() => setPage(page - 1)} >PRE</button>
                        <Pagination currentPage={page} lastPage={10} onPageChange={setPage} />
                        <button disabled={page === 10} onClick={() => setPage(page + 1)} >NEXT</button>
                    </div>
                    {/* -----------filter By type------------ */}

                    <button onClick={() => setFilterType("movie")} >Movie</button>
                    <button onClick={() => setFilterType("series")}  >Series</button>
                    <button onClick={() => setFilterType("game")}  >game</button>
                    <button onClick={() => setFilterType([])}  >All</button>

                </div>

                {
                    data?.map((e) => (




                        <div key={e.imdbID}   >


                            <div className='cart'>
                                <div>
                                    <img style={{ width: "100px", height: "150px", borderRadius: "20px" }} src={e.Poster} alt="" />
                                </div>
                                <div>
                                    <div >
                                        <p>  Name :    <span style={{ color: "gray" }} > {e.Title}</span>  </p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: "50px" }}>
                                        <div>
                                            Type   : {e.Type}

                                        </div>
                                        <div>
                                            Year : {e.Year}
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>






                    ))
                }

            </div>



        </>
    )
}

export default Movies