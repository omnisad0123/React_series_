import React from 'react'
import img from '../Images/khushboo.jpg'
export default function Card({username2,someobj}) {
   console.log("props",someobj)
   const age = someobj ? someobj.age : null;
   const nm= someobj ? someobj.username: null;
    return (
    <div>
      <div class="relative h-[400px] w-[300px] rounded-md">
  <img
     src={img}
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{nm}{username2}</h1>
    <p class="mt-2 text-sm text-gray-300">
      Hii,I am {nm} and currently I am in 12th standerd. My age is {age}
    </p> 
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
    <button class="mt- inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>

    </div>
  )
}

