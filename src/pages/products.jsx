import React from 'react'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import chips from '../images/chips.jpg'
import moong from '../images/moong.jpg'
import Image from 'next/image'

const Heading = ({ children }) => (
  <h1 className="text-lg font-semibold tracking-tight text-gray-300 sm:text-xl">
    {children}
  </h1>
)
const Paragraph = ({ children }) => (
  <p className="text-md my-3 leading-7 tracking-tight text-gray-400">
    {children}
  </p>
)

const products = [
  {
    title: 'Vacuum Fried Fruit Chips',
    images:[chips],
    description:
      'Indulge in a healthy snacking experience with our vacuum-fried fruit chips, available in a variety of flavors including jackfruit, carrot, mixed vegetables, and okra.',
  },
  {
    title: 'Frozen Food Items',
    images:["https://img3.exportersindia.com/product_images/bc-full/2022/7/7990788/frozen-chapati-1656752990-6427159.jpeg","https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/parotta.jpg","https://img2.exportersindia.com/product_images/bc-full/dir_71/2100786/frozen-idiyappam-1560788.jpg"],
    description:
      'Discover the convenience of ready-to-eat frozen food items, including Malabar porotta, chappathi, and idiyappam, bringing the flavors of India to your table with ease.',
  },
  {
    title: 'Indian Pulses',
    images:[moong,"https://twobrothersindiashop.com/cdn/shop/articles/types_of_dals_with_names.png?v=1688113307"],
    description:
      'From bulk to retail quantities, we provide a wide selection of Indian pulses such as moong dal and urud dal, meeting your culinary needs with quality and authenticity.',
  },
  {
    title: 'Rice Varieties',
    images:["https://theforkedspoon.com/wp-content/uploads/2020/04/Types-of-RIce.jpg","https://4.imimg.com/data4/PV/BP/MY-21722701/474718_444k_it4_210x139-500x500.jpg","https://www.jeerakasalarice.in/images/jeerakasala-large.webp"],
    description:
      'Explore a diverse range of rice options, including long-grain boiled basmati rice, kurva rice, jeerakasala rice, jaya rice, vadi matta rice, sona masoori rice, and ponni rice, each offering a distinct taste and texture for your cooking pleasure.',
  },
  {
    title: 'Desiccated Coconut Powder',
    images:['https://5.imimg.com/data5/SELLER/Default/2022/11/TN/VP/DP/120665070/desiccated-coconut-powder-500x500.jpg'],
    description:
      'Elevate your recipes with the rich flavor and texture of desiccated coconut powder, adding a tropical twist to your culinary creations.',
  },
  {
    title: 'Coconut Milk Powder',
    images:['https://satopradhan.com/cdn/shop/products/Preview-1CoconutMilk.jpg?v=1654666507'],
    description:
      'Experience the creamy goodness of coconut milk in a convenient powder form, perfect for adding a luscious coconut flavor to a variety of dishes.',
  },
]

export default function Products() {
  return (
    <div>
      {' '}
      <Header />
      <main className="text-normal relative  isolate bg-black text-gray-400">
        {/* Background */}
        {/* <div
    className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
    aria-hidden="true"
  >
    <div
      className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-purple-800 to-indigo-700 opacity-50"
      style={{
        clipPath:
          'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
      }}
    />
  </div> */}
        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-4xl rounded-xl px-6 lg:px-8">
            <>
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Products
              </h2>
              <div className="mb-10 mt-6 flex items-center gap-4">
                <div className="text-tablet flex flex-col leading-6 tracking-tight">
                  <div className={`text-[#F1F1F1]`}>
                    QIB Logistics offers an extensive array of products sourced
                    from around the globe, providing a diverse selection to meet
                    your culinary and retail needs. From vacuum-fried fruit
                    chips to a variety of rice options, frozen food items,
                    Indian pulses, and coconut-based products, our offerings are
                    curated to bring international flavors to your table, with a
                    commitment to quality and authenticity.
                  </div>
                  {/* <div className=" text-[#989898]">
                {currentItems[0].author?.profile}
              </div> */}
                </div>
              </div>
              {products?.map(i => <div key={i.title} className='my-4'>
            <Heading>{i.title}</Heading>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-4'>
            {i.images?.map(img => <Image
            key={`${i.title}-${img}`}
        className="aspect-[3/2] w-full rounded-2xl object-cover"
        src={img}
        alt="Products"
        unoptimized={true}
        width={400}
        height={400}
      />)}
            </div>
            <Paragraph>{i.description}</Paragraph>
          </div>)}
            </>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
