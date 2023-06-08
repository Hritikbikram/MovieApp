import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetSearchMovieQuery } from '../Features/MovieApi';
import { Image, Shimmer } from 'react-shimmer';

const SearchPage = () => {

  const nav =useNavigate();
  const {searchText}=useParams();

  const {isLoading,isError,error,data}=useGetSearchMovieQuery(searchText);

  return (
    

    <div >
      <div className='grid grid-cols-4 px-5 py-5 gap-4 bg-blue-gray-500 text-white'>

      {data?.results.map((movie,index)=>{
       return (
        <div onClick={()=>nav(`../movie/detail/${movie.id}`)} key={movie?.id} className=' rounded-md overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
          <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`} fallback={<Shimmer width={300} height={400} duration={4}/>}></Image>
          

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

export default SearchPage