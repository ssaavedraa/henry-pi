import React from "react";
import { useState } from "react";
import './paging.css'

export default function Paging({countriesPerPage, allCountries, paging, currentPage}) {
    const pageNumbers = []

    var [activePage, setActivePage] = useState(currentPage);

    activePage = currentPage

    console.log(activePage, 'active page' , currentPage, 'current page')

    function changePage(page){
        setActivePage(page + 1)
        paging(page)
    }

    for(let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className="paging-container">
        {pageNumbers && pageNumbers.reverse().map(page => {
            if(page === currentPage -1){
                console.log('son iguales', page, currentPage -1)
                return(
                    <div className="selected-page" id={page} key={page}>
                        <label htmlFor={page} className='page-label'  onClick={(e) => changePage(page)} >
                            <input type="radio" name='page' id={page} className='radio-page'/>
                            <div className="active-page" >
                                {activePage}
                            </div>
                        </label>
                    </div>
                )
            }
            return(
                <div className="selected-page" key={page}>
                        <label htmlFor={page} className='page-label'  onClick={(e) => changePage(page)} >
                            <input type="radio" name='page' id={activePage} className='radio-page' />
                            <div className="inactive-page">
                                {page + 1}
                            </div>
                        </label>
                    </div>
            )
        })}
        </div>
    )
}