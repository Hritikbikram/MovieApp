import React from 'react'
import { useGetTrendingMoviesQuery } from '../Features/MovieApi'
import { useNavigate } from 'react-router';

const Home = () => {

  const {data, isLoading,error}=useGetTrendingMoviesQuery();
  

  const nav =useNavigate();

  
  if(isLoading){
    return(
    <div className='h-[200px] w-[200px] mx-auto top-10'>
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_usmfx6bp.json"  background="transparent"  speed="1"    loop autoplay></lottie-player>
    </div>)
  }

  return (
    <div >
      <div className='grid grid-cols-4 px-5 py-5 gap-4 bg-blue-gray-500 text-white'>

      {data?.results.map((movie,index)=>{
       return (
        <div onClick={()=>nav(`movie/detail/${movie.id}`,{state:movie})} key={movie?.id} className=' rounded-md overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}></img>

            <div className="p-4">
              <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
              <p>{movie.overview.substring(0,60) + '......'}</p>
            </div>
          </div>
       )
      })}
      
    </div>
    </div>
  )
}

export default Home