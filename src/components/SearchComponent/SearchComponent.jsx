import React from 'react';
import "./SearchComponent.scss";

const SearchComponent = ({children, placeholder, onHandleInput,valueSearch, onChangeInputSearch}) => {
  return (
    <form className="search-component f a-center" onSubmit={onHandleInput}>
        <div className="search-input-container f a-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#080A25" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.0004 20.9999L16.6504 16.6499" stroke="#080A25" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <input 
            placeholder={placeholder}
            onChange={onChangeInputSearch}
            value={valueSearch}
            ></input>
        </div>
        {children}
    </form>
  )
}

export default SearchComponent