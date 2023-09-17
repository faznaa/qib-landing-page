import React from 'react'
const Heading = ({ children }) => <h1 className="text-lg font-semibold tracking-tight text-gray-300 sm:text-xl">{children}</h1>
const Paragraph = ({children}) => <p className='my-3 text-md leading-7 tracking-tight text-gray-400'>{children}</p>
export default function ImportServices({ importProducts }) {
  return (
    <>
    <Heading>Import Services</Heading>
    <div>
    <Paragraph>Our import services encompass a wide range of capabilities. We have a vast network of suppliers and partners across the globe, allowing us to source products from various regions and industries. This extensive reach enables us to find the right products for your needs, whether it&quot;s fresh produce from South Asia or specialty items from the Middle East.</Paragraph>
    <Paragraph>One of the critical aspects of successful imports is navigating customs compliance. Our experienced team of customs experts ensures that your imports meet all regulatory requirements, minimizing delays and complications. We handle the paperwork, ensuring that all necessary permits, licenses, and certificates are in order. Our focus is on making the customs clearance process as smooth and efficient as possible.
</Paragraph>
<Paragraph>Some of our products are: </Paragraph>
<ul
    role="list"
    className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:mx-0 lg:max-w-4xl  lg:grid-cols-3"
  >
    
   {importProducts.map((prod) =>  <li key={prod?.name}>
      {' '}
      <img
        className="aspect-[3/2] w-full rounded-2xl object-cover"
        src={prod.img}
        alt={prod.name}
      />
      <h3 className="text-zinc-400 mt-6 text-lg font-semibold leading-8 tracking-tight">
        {prod.name}
      </h3>
    </li>)}
  </ul>
    </div>
    <div className='my-8'>
      <Heading>Export Services</Heading>
      <Paragraph>Expanding your business to new international markets is a significant opportunity, and our export services are tailored to help you achieve that. We assist in identifying market opportunities and guide you through the process of entering new regions.</Paragraph>
      <Paragraph>A crucial aspect of successful exports is managing export documentation. We take the administrative burden off your shoulders by handling all the necessary export documentation. Our team ensures that your exports comply with international trade laws and regulations, reducing the risk of complications or delays.</Paragraph>
      <Paragraph>Transportation is a critical component of our export services. We specialize in delivering your products safely to international destinations. Whether you&quot;re shipping goods by sea, air, or land, you can trust us to choose the most reliable and efficient transportation methods based on your specific needs.</Paragraph>
    </div>
    <div className='my-8'>
      <Heading>Rebranding</Heading>
      <img
        className="aspect-[3/2] w-full sm:max-w-md my-4 rounded-2xl object-cover"
        src="https://s39940.pcdn.co/wp-content/uploads/2022/05/rebrand-tips.jpg"
        alt="Rebranding"
      />
      <Paragraph>Rebranding, also known as whitelabelling, is a strategic practice employed by businesses to offer products or services under their own brand, even though those products are manufactured or provided by another company. This process involves creating a new brand identity, packaging, and labeling that align with the marketing and branding guidelines of the rebranding company.</Paragraph>
      <Paragraph>At QIB Logistics, we specialize in rebranding services, helping businesses introduce products to new markets and extend their product lines without the need for in-house manufacturing. Whether you have raw products from international suppliers or wish to diversify your product offerings, our expertise in rebranding allows you to present these products as your own, ensuring a seamless and successful market entry. With a focus on quality, compliance, and customer satisfaction, we empower businesses to leverage the potential of rebranding, fostering growth and expansion in their target markets.</Paragraph>
    </div>
  {/* <p className='text-black my-4 font-semibold text-lg'>Some of our imports</p> */}
 </>
  )
}
