import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '../components/Container'
import Link from 'next/link'
import ImportServices from './Services/import-services'
import ExportServices from './Services/export-services'
import WarehouseService from './Services/warehouse'
import TruckServices from './Services/truck-services'
import WhiteLabelling from './Services/white-labelling'

const importProducts = [
  {
    name:"Egyptian Mangoes",
    img:"https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/mangoes_what_to_know_1296x728_header-1024x575.jpg?w=1155&h=1528"
  },
  {
    name:"Indian Spices",
    img:"https://someindiangirl.com/wp-content/uploads/2020/01/780-2.jpg"
  },
  {
    name:"Palm Leaf Plates",
    img:"https://arbhuenterprises.com/wp-content/uploads/2022/06/eco-friendly-palm-leaf-plates.jpeg"
  },
  {name:"Thyme",
img:"http://www.choiceinternational.net/images/emi1.png"},
{
  name:"Jackfruit Chips",
  img:"https://m.media-amazon.com/images/I/61JHFch8MVS.jpg"
}
]
const exportProducts = [
  {
    name:"Olive oil",
    img:"https://static-bebeautiful-in.unileverservices.com/1200/900/istockphoto-464433694-612x612_1.jpeg"
  },
  {
    name:"Blueberries",
    img:"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22726_16560822540037952.jpg"
  },
  {
    name:"Cherries",
    img:"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22726_16560822540037952.jpg"
  },
]
const truck = [
  {
    name:"Dry Van Trucking",
    img:"https://thejunctionllc.com/wp-content/uploads/2019/04/Dry-Van-Trucking-shipping.jpg",
    description:"Transport your goods securely in our enclosed dry vans"
  },
  {
    name:"Flatbed Trucking",
    img:"https://www.pensketruckrental.com/media-library/penske-26-foot-flatbed-truck.jpg?id=31454443&width=600&height=600&quality=85&coordinates=0%2C0%2C0%2C0",
    description:"Versatile flatbed solutions for oversized and specialized cargo."

  },
  {
    name:"Frieght Forwarding",
    img:"https://dnasupplychain.com/wp-content/uploads/2021/03/1.jpg",
    description:"Seamlessly navigate global logistics with our expert forwarding services."

  },
  {
    name:"Logistic services",
    img:"https://blog.tatanexarc.com/wp-content/uploads/2023/01/What-are-logistics-services.jpg",
    description:"Tailored logistics solutions to optimize your supply chain."

  },
  {
    name:"Refrigerated Trucking",
    img:"https://truckstop.com/wp-content/uploads/2021/02/blog-reefer-freight.jpg",
    description:"Our refrigerated trucking keeps your perishables fresh and safe during transit."

  },
  {
    name:"LTL Trucking",
    img:"https://www.freightcenter.com/wp-content/webp-express/webp-images/uploads/2022/10/less-than-truckload-ltl-freight-shipping-infographic-1.jpg.webp",
    description:"Efficient Less-Than-Truckload options for cost-effective shipping."

  },
 
]
// Search Engine Optimization: "Want to climb to the top of search engine results? We'll be your website's personal trainer, flexing our SEO muscles to make sure your online presence gets fit, fabulous, and impossible to ignore."
const features = [
  {
    title: 'Import Services',
    url: '/import',
    description:
      'Bringing international products to Canada has never been simpler. We handle all the paperwork and logistics, so you can enjoy the products you love from around the world.',
    image:
      'https://images.unsplash.com/photo-1565725001033-adccc84507e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      child:<ImportServices importProducts={importProducts}/>
  },
  {
    title: 'Export Services',
    url: '/export',
    description:"Let us help you take your Canadian products to global markets. We'll handle the shipping and export process, so you can focus on growing your business.",
    child:<ExportServices exportProducts={exportProducts}/>

  },
  {
    title: 'Truck',
    url: '/truck',
    description:"Experience reliable trucking services that deliver your goods on time, every time.",
    child:<TruckServices truck={truck}/>

  },
  {
    title: 'Warehousing',
    url: '/warehouse',
    child:<WarehouseService />,
    description:
      'Store your goods securely with us. Our warehouses are equipped with modern facilities to keep your products safe and accessible.      ',
    image:
      'https://images.unsplash.com/photo-1591419478162-a4dd21b7ec0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'White Labelling',
    url: '/white-label',

    description:
      "Expand your reach in Canada with our white labeling service. We'll create a custom brand for your products, ensuring they meet Canadian standards.",
    image:
      'https://images.unsplash.com/photo-1563242152-568e5de6f2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    child:<WhiteLabelling />
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  

  return (
    <section
      id="services"
      aria-label="Features for running your books"
      // className="relative overflow-hidden bg-violet t pb-28 pt-20 sm:py-32"

      className="t relative overflow-hidden bg-gradient-to-tr from-violet via-[#4d313a] to-orange pb-28 pt-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Our services{' '}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {/* Well everything you need if you aren’t that picky about minor
            details like tax compliance. */}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-3">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-2xl [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {selectedIndex === featureIndex && feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-9">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    {/* bg-gradient-to-r from-zinc-50 to-slate-400 */}
                    <div className="mt-10 h-[40rem] overflow-scroll sm:w-[45rem] sm:overflow-hidden rounded-xl bg-jungle p-10  sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    <h3 className="font-display text-3xl tracking-tight text-zinc-300  sm:text-2xl md:text-3xl">
    {feature.title}
  </h3> 
  {/* <p className=" max-w-3xl font-display tracking-tight mt-4 text-left text-base text-zinc-300">
  {feature.description}

  </p> */}
                      {feature.child}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
