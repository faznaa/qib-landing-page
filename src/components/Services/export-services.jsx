import React from 'react'

export default function ExportServices({ exportProducts }) {
  return (
    <>
  {/* <p className='text-black my-4 font-semibold text-lg'>Some of our imports</p> */}
  <ul
    role="list"
    className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-4xl  lg:grid-cols-3"
  >
    
   {exportProducts.map((prod) =>  <li key={prod?.name}>
      <img
        className="aspect-[3/2] w-full rounded-2xl object-cover"
        src={prod.img}
        alt={prod.name}
      />
      <h3 className="text-zinc-400 mt-6 text-lg font-semibold leading-8 tracking-tight">
        {prod.name}
      </h3>
    </li>)}
  </ul></>
  )
}
