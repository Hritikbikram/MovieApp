import { useFormik } from 'formik';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';



const Header = () => {

  const nav=useNavigate();

  const formik=useFormik({
    initialValues:{
      search:''
    },
    onSubmit:(vals,{resetForm})=>
    {

      nav(`movie/search/${vals.search}`);
      resetForm();

    }
  })



  return (

    <header className='flex bg-black text-white px-9 justify-between py-3 items-center sticky top-0 z-20'>

<NavLink to='/' className='text-xl'>TMDB</NavLink> 

<nav className='space-x-10'>

<NavLink to='/movie/top_rated' className='text-lg p-4 hover:bg-pink-500' >Top Rated</NavLink> 

<NavLink to='/movie/popular' className='text-lg p-4 hover:bg-pink-500' >Popular</NavLink> 

<NavLink to='/movie/upcoming' className='text-lg p-4 hover:bg-pink-500' >Upcoming</NavLink> 

<form onSubmit={formik.handleSubmit}>
  <div>
    <input
    className='outline-none px-2 text-black'
    onChange={formik.handleChange} 
    name='search'
    value={formik.values.search}
     type="text" placeholder='Search Movie' />
  </div>
</form>


</nav>

    </header>



  )
}

export default Header