import React from 'react'

export default function WhiteLabelling() {
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
          src="https://www.sttark.com/app/uploads/2021/09/EssentialOilManufacturers.jpg"
          alt="truck"
        />
        
      </li>
      <li>
      <h3 className="text-zinc-500  text-lg  leading-8 tracking-tight">
      <p className='mb-2'>QIB Logistics specializes in white-labeling services that can transform your products into market-ready brands in Canada. Whether you`re a foreign manufacturer looking to introduce your products to the Canadian market or a local business seeking to diversify your offerings, our expertise ensures that your products meet Canadian standards and regulations.</p>
      {/* <p className='my-2'> Whether you need short-term storage or a long-term solution, our commitment to safeguarding your inventory 
       remains unwavering. With us, you can trust that your products are in the best hands, allowing you
        to focus on what matters most - growing your business. Your goods, our guarantee of safety and security.</p> */}
          </h3>
      </li>
    </ul>
    {/* <p className='text-zinc-500  text-lg  leading-8 tracking-tight my-4'> We take pride in creating custom brands that resonate with Canadian consumers, helping you expand your reach and succeed in this diverse market. With QIB Logistics, your product`s transformation into a Canadian success story is just a label away.</p> */}
</>
    )
  }
  