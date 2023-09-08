import React from 'react'

export default function WarehouseService() {
  return (
    <>
  {/* <p className='text-black my-4 font-semibold text-lg'>Some of our imports</p> */}
  <ul
    role="list"
    className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-3xl  "
  >
    
    <li>
      <img
        className="aspect-[3/2] w-full rounded-2xl object-cover"
        src="https://wellpack.org/wp-content/uploads/2021/10/Warehousing-and-Fulfillment-06.jpg"
        alt="truck"
      />
      
    </li>
    <li>
    <h3 className="text-zinc-500  text-lg  leading-8 tracking-tight">
    <p className='mb-2'>At QIB Logistics (QuickCargo), our warehousing service is designed with your peace of mind in mind.
     We take the responsibility of storing your products seriously, ensuring they are kept safe and
      secure at all times. Our state-of-the-art warehouses are equipped with cutting-edge security systems,
       temperature control, and easy access, making them the ideal choice for storing your valuable goods.</p>
    {/* <p className='my-2'> Whether you need short-term storage or a long-term solution, our commitment to safeguarding your inventory 
     remains unwavering. With us, you can trust that your products are in the best hands, allowing you
      to focus on what matters most - growing your business. Your goods, our guarantee of safety and security.</p> */}
        </h3>
    </li>
  </ul></>
  )
}
