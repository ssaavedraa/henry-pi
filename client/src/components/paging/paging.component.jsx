import React from "react";
import { useState } from "react";
import './paging.css'

export default function Paging({countriesPerPage, allCountries, paging, currentPage}) {
    const pageNumbers = []
    console.log(currentPage)
    var [activePage, setActivePage] = useState(currentPage -1);

    activePage = currentPage

    function changePage(page){
        setActivePage(page - 1)
        paging(page - 1)
    }

    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    let pages = pageNumbers.slice(0, 5)

    if(!pages.includes(currentPage + 1)){
        pages = pageNumbers.slice(currentPage-3, currentPage+2)
    }
    console.log(currentPage, pages)

    return(
        <div className="paging-container">
        {   currentPage < pageNumbers[pageNumbers.length -1 ] && <div className="selected-page">
                                    <label htmlFor='prev' className='page-label' onClick={(e) => changePage(currentPage + 1)} >
                                        <input type="radio" name='page' id={activePage} className='radio-page' />
                                        <div className="inactive-page">
                                            {'>'}
                                        </div>
                                    </label>
                                </div>
        }
        {pages && pages.reverse().map(page => {
            if(page === currentPage){
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
                                {page}
                            </div>
                        </label>
                    </div>
            )
        })}
        {
            currentPage > 1 && <div className="selected-page">
                                    <label htmlFor='prev' className='page-label' onClick={(e) => changePage(currentPage-1)} >
                                        <input type="radio" name='page' id={activePage} className='radio-page' />
                                        <div className="inactive-page">
                                            {'<'}
                                        </div>
                                    </label>
                                </div>
        }
        </div>
    )
}