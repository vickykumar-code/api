import React from 'react';
import Tags from './components/Tags';
import Random from './components/Random'

const App = () => {
  return (
    <div className='w-full h-100% flex flex-col bg-sky-200 relative items-center '>
      <h1 className=' bg-white rounded-lg w-11/12 text-center mt-12   py-3 font-bold
      text-2xl px-10'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-20'>
          <Random/>
          <Tags/>
      </div>
    </div>
  )
}

export default App