import React from 'react'
import './search.css'

const SearchIcon = () => {
    return (
        <div style={{marginRight:'20px'}} >
             <input style={{padding:'5px',border:'#ddd 2px solid'}} type="text" placeholder="Search For.." name="search" />
              <button style={{padding:'5px'}} type="submit">Search</button>
        </div>
    )
}

export default SearchIcon