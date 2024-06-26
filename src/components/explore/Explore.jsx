import React from 'react'
import { Link } from 'react-router-dom';



const Explore = () => {
  const imageurl="images/banner2.jpg";
  return (
    <div className='flex justify-center items-center -mt-5 mb-4 w-full 
    h-[350px]  bg-cover '  style={{backgroundImage:`url(${imageurl})`}}>
          <Link to={'/allproducts'}>
        <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Explore Now</button>
          </Link>
     </div>
  )
}

export default Explore

