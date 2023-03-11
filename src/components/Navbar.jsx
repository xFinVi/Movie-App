import React, { Fragment } from 'react'
import{HiSearch} from 'react-icons/hi'
import '../styles/navbar.css'


function Navbar(props) {
  return (
    <Fragment>
       <nav className='navbar justify-content-center'>
        <div className='p-3 d-flex align-items-center'>
            <h1 className=' h1'>Victoria Movie App</h1>
            <span className='nav-item'>Movies</span>
            <span className='nav-item'>TV Series</span>
            <span className='nav-item'>Trending</span>
        </div>
       <div className="
        align-items-center">
            <input className='form-control-sm'         
            type='text'   
            placeholder="search"
            value={props.value}
            onChange={(e) => props.setSearchValue(e.target.value)}
            />
            <HiSearch className='search'color='white' fontSize={30}/>
        </div>
</nav>
    </Fragment> 
    

    
  )
}

export default Navbar