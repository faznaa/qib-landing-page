import React from 'react'
const Paragraph = ({children}) => <p className='my-3 text-md leading-6 tracking-tight text-gray-400'>{children}</p>

export default function TruckServices({ truck }) {
  return (
    <>
    <Paragraph>    QIB Logistics offers comprehensive transportation services, with a primary focus on trucking solutions that ensure the efficient movement of your goods. Our fleet of trucks is equipped to handle various cargo types, from perishable products like fruits and vegetables to non-perishable items. With a commitment to reliability and timely deliveries, we optimize transportation routes and employ experienced drivers to ensure your products reach their destination swiftly and in optimal condition. Whether you require short-haul or long-haul transportation, you can trust QIB Logistics to provide dependable and cost-effective trucking services that meet your specific needs while ensuring the smooth flow of your supply chain.
</Paragraph>
<Paragraph>Some of the trucks we offer: </Paragraph>
  {/* <p className='text-black my-4 font-semibold text-lg'>Some of our imports</p> */}
  <ul
    role="list"
    className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-7xl  lg:grid-cols-3"
  >
    
   {truck.map((prod) =>  <li key={prod?.name} className='group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-zinc-900 px-8 pb-8 pt-32 lg:pt-48 '>
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover transform duration-700 backdrop-opacity-100 aspect-1 sm:aspect-[3/2]"

        src={prod.img}
        alt={prod.name}
      />
      {/* <h3 className="text-zinc-400 mt-6 text-lg font-semibold leading-8 tracking-tight">
        {prod.name}
      </h3> */}
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/40 " />
        <div className="absolute inset-0 -z-10 rounded-md ring-1 ring-inset ring-zinc-900/10  " />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-900/40 rounded-xl  transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex mx-6">
            <div>
              <h3 className="mt-3 text-md sm:text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {prod.name}
              </h3>
              <div className="flex gap-x-2.5 text-sm leading-6 text-zinc-300">
                {/* <img src={ima} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" /> */}
                
              </div>{" "}
            </div>{" "}
          </div>
          <div className="absolute w-full flex place-content-center mt-20">
            <p className="font-sans text-sm sm:text-md text-left text-white mt-1 sm:mt-6 mx-6">
              {prod?.description}
            </p>
          </div>
        </div>
    </li>)}
  </ul></>
  )
}
