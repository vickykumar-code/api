import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tags = () => {
  const [tag, setTags] = useState('');
  
  const {gif, loading, fetchData} = useGif(tag);
  function changeHandler (event){
    setTags(event.target.value)
  }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-6'>
      <h1 className='text-2xl mt-15px underline uppercase font-bold'>Random {tag} Gifs</h1>
      
      {
        loading ? (<Spinner/>) : ( <img src={gif} width="450" alt="GIF" />

)
      }
      <input
        className='w-10/12 bg-white py-2 text-lg rounded-lg mb-3px text-center'
        onChange={changeHandler}
        value={tag}
      />
      <button onClick={() => fetchData(tag)}
      className='w-10/12 bg-amber-200 py-2 text-lg rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tags