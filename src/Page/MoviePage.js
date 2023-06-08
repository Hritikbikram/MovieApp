import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetMovieByPageQuery } from '../Features/MovieApi'

const MoviePage = () => {

  const nav =useNavigate();
  const {category,page} =useParams()
  const {isError,isLoading,data}=useGetMovieByPageQuery({
    category,page
  });
  
  
  
  return (
    

    <div >
      <div className='grid grid-cols-4 px-5 py-5 gap-4 bg-blue-gray-500 text-white'>

      {data?.results.map((movie,index)=>{
       return (
        <div onClick={()=>nav(`../movie/detail/${movie.id}`)} key={movie?.id} className=' rounded-md overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}></img>

            <div className="p-4">
              <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
              <p>{movie.overview.substring(0,60) + '......'}</p>
            </div>
          </div>
       )
      })}
      
    </div>

        <div className='flex justify-center space-x-5 pb-4 py-4 text-xl'>

          {data?.page>1 &&  <button onClick={()=>nav(-1)}>Prev</button>}
            <h1>{data?.page}</h1>
            <button onClick={()=>nav(`/movie/${category}/${data.page+1}`)}>Next  </button>
        </div>

    </div>
    
  )


}

export default MoviePage