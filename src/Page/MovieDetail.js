import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useGetMovieVideoQuery } from '../Features/MovieApi';

const MovieDetail = () => {
  const {id}= useParams();
  const {data,isLoading}= useGetMovieVideoQuery(id);
  const {state}=useLocation();

  console.log(state);
  


  if(isLoading){
    return(
    <div className='h-[200px] w-[200px] mx-auto top-10'>
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_usmfx6bp.json"  background="transparent"  speed="1"    loop autoplay></lottie-player>
    </div>)
  }

  




  return (
<div className='bg-no-repeat absolute top-0 w-[100%] bg-cover h-screen' style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${state.poster_path})`  }}>


<div className='w-[70%] mt-[5%] '>

     {/* <iframe className='h-[500px] w-[100%] mt-[65px]' src={`https://www.youtube.com/embed/${data?.results[0].key}`}  ></iframe>   
     </div> */}
    
  
     <iframe className='aspect-video w-full' src={`https://www.youtube.com/embed/${data?.results[0].key}`}  allowFullScreen></iframe>   
     </div>
    
  

</div>
  )
}

export default MovieDetail