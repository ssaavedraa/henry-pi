import React from "react";
import './paging.css'

export default function Paging({countriesPerPage, allCountries, paging}) {
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className="paging-container">
            {
                pageNumbers && pageNumbers.map(page => {
                    return(
                        <div className="page" key={page} onClick={() => paging(page)}>
                            {page + 1}
                        </div>
                    )
                })
            }
        </div>
    )
}