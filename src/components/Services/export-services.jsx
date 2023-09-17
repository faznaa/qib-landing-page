import React from 'react'
import { brokerageServices } from '../constants'

const Heading = ({ children }) => <h1 className="text-lg font-semibold tracking-tight text-gray-300 sm:text-xl">{children}</h1>

export default function ExportServices({ exportProducts }) {
  return (
    <>
  {/* <p className='text-black my-4 font-semibold text-lg'>Some of our imports</p> */}
  
    
  <p className='my-4 text-md leading-7'>Navigating the ever-changing landscape of customs regulations, import/export documentation, and compliance requirements can be a daunting task. That`s where our Brokerage service at QIB Logistics steps in to make your life easier.</p>
  <div>
    {brokerageServices.map((prod) =>  <div className='my-6' key={prod.text}>
    <Heading>{prod.text}</Heading>
    <p className='my-1 text-md leading-6 text-gray-400'>{prod.description}</p></div>)}
    </div>
  
  </>
  )
}
