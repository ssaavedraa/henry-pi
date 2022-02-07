import React from "react";
import { useState } from "react";
import './paging.css'

export default function Paging({countriesPerPage, allCountries, paging, currentPage}) {
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className="paging-container">
            {
                pageNumbers && pageNumbers.reverse().map(page => {
                    return(
                        <div className="selected-page" key={page}>
                            <label htmlFor={page} className='page-label' onClick={() => paging(page)}>
                                <input type="radio" name='page' id={page} className='radio-page' defaultChecked />
                                <div className="active-page" >
                                    {page + 1}
                                </div>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}