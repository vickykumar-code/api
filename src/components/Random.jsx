import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../spinner';
import useGif from '../hooks/useGif';



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

  const {gif, loading, fetchData} = useGif();
  
  return (
    <div className='w-1/2  bg-green-300 rounded-lg border border-black
     flex flex-col items-center gap-y-6'>
      <h1 className='text-2xl mt-15px underline uppercase font-bold'>A Random Gifs</h1>
      
      {
        loading ? (<Spinner/>) : ( <img src={gif} width="450" alt="GIF" />)
      }
      
      <button onClick= {() => fetchData()}
      className='w-10/12 bg-amber-200 py-2 text-lg rounded-lg mb-[25px]'>Generate</button>
    </div>
  )
}

export default Random