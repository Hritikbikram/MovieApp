import React from 'react'
import { Route, Routes } from 'react-router'
import RouteLayouts from './Page/RouteLayouts'
import Home from './Page/Home'
import MovieCategory from './Features/MovieCategory'
import MovieDetail from './Page/MovieDetail'
import MoviePage from './Page/MoviePage'
import SearchPage from './Page/SearchPage'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<RouteLayouts/>}>
        <Route path='/' element={<Home />} />
        <Route path='movie/:category' element={<MovieCategory />} />
        <Route path='movie/detail/:id' element={<MovieDetail />} />
        <Route path='movie/:category/:page' element={<MoviePage />} />
        <Route path='movie/search/:searchText' element={<SearchPage />} />
        <Route path='*' element={<h1>Page not found Here</h1>} />

      </Route>
    </Routes>
    
    </>
  )
}

export default App