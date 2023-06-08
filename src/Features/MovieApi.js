import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrls="https://api.themoviedb.org/3";
const apikey="12d0a796d851bbc6bd6ff0f3b3563fa5";
export const movieapi= createApi({

reducerPath:'MovieApi',
baseQuery:fetchBaseQuery({baseUrl:baseUrls}),
endpoints:(builders)=>({

  getTrendingMovies:builders.query({
    query:(query)=>({
      url:'trending/all/day',
      params:{
        api_key:apikey,
      }
    })
  }),


  getMovieByCategory:builders.query({
    query:(query)=>({
      url:`/movie/${query}`,
      params:{
        api_key:apikey,
      }

    })
  }),

  getMovieByPage:builders.query({
    query:(query)=>({
      url:`/movie/${query.category}`,
      params:{
        api_key:apikey,
        page:query.page
      }

    })
  }),


  getMovieVideo:builders.query({
    query:(query)=>({
      url:`movie/${query}/videos`,
      params:{
        api_key:apikey,
      }

    })
  }),


  getSearchMovie:builders.query({
    query:(query)=>({

      url:'/search/movie',
      params:{
        api_key:apikey,
        query:query,
      }

    })
  }),

})
});


export const { useGetTrendingMoviesQuery, useGetSearchMovieQuery, useGetMovieByCategoryQuery, useGetMovieVideoQuery, useGetMovieByPageQuery }=movieapi;