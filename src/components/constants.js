import ExportServices from "./Services/export-services"
import ImportServices from "./Services/import-services"
import TruckServices from "./Services/truck-services"
import WarehouseService from "./Services/warehouse"
import WhiteLabelling from "./Services/white-labelling"

export const posts = [
  {
    id: 3,
    title: 'Exploring QIB Logistics: Your Trusted Partner in Global Trade',
    href: '/blogs/3',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'Sep 12, 2023',
    datetime: '2023-12-09',
    author: {
      name: 'Ha Nguyen',
      profile:'Tech Support',
      imageUrl:
        'https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBhc2lhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
  },
    {
      id: 1,
      title: 'How Retort packing technology help your product to sustain its quality in its shelf life?',
      href: '/blogs/1',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        'https://cdn2.hubspot.net/hubfs/70169/blog-files/stand-up-retort-pouch-1-1024x683.jpg',
      date: 'Sep 12, 2023',
      datetime: '2023-12-09',
      author: {
        name: 'Michael Foster',
        profile:'Tech Support',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'The Future of Logistics: Trends and Technologies Shaping the Industry',
        href: '/blogs/2',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        date: 'Sep 12, 2023',
        datetime: '2023-12-09',
        author: {
          name: 'Samuel Stan',
          profile:'CEO ',
          imageUrl:
            'https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        },
      }
     
  ]

  export const importProducts = [
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
  export const features = [
    {
      title: 'Import & Export Services',
      url: 'import-and-export',
      description:
        'QIB Logistics streamlines global trade with our Import & Export services, ensuring your goods move seamlessly across borders, connecting you to new markets worldwide.',
      image:
        'https://www.legalwiz.in/wp-content/uploads/How-to-start-import-export-business-in-india.jpg',
        child:<ImportServices importProducts={importProducts}/>
    },
    {
      title: 'Brokerage',
      url: 'brokerage',
      image:'https://assets.entrepreneur.com/content/3x2/2000/20190617160341-GettyImages-804263444.jpeg',
      description:" We specialize in simplifying the complexities of cross-border trade, ensuring your goods move seamlessly and compliantly across borders.",
      child:<ExportServices exportProducts={exportProducts}/>
  
    },
    {
      title: 'Transportation',
      url: 'transportation',
      image:"https://thejunctionllc.com/wp-content/uploads/2019/04/Dry-Van-Trucking-shipping.jpg",
      description:"Experience reliable trucking services that deliver your goods on time, every time.",
      child:<TruckServices truck={truck}/>
  
    },
    {
      title: 'Warehousing',
      url: 'warehouse',
      child:<WarehouseService />,
      description:
        'Store your goods securely with us. Our warehouses are equipped with modern facilities to keep your products safe and accessible.      ',
      image:
        'https://media.freshbooks.com/wp-content/uploads/2022/01/what-is-a-warehouse.jpg',
    }
  ]

  export const brokerageServices = [
    {text:"Customs Expertise",description:"Our experienced team of customs brokers is well-versed in the intricate details of customs procedures, ensuring your shipments comply with all regulations. We handle the paperwork, duties, and taxes, so you don't have to worry about the complexities of customs clearance."},
    {text:"Compliance Assurance",description:"We keep abreast of the latest changes in trade regulations to ensure your shipments are always in compliance. With our in-depth knowledge, we help you avoid costly delays or penalties."},
    {text:"Efficiency",description:"Time is of the essence in international trade. Our brokerage service streamlines the clearance process, reducing delays and ensuring your goods reach their destination swiftly."},
    {text:"Transparency",description:"We believe in transparent communication. Throughout the clearance process, we keep you informed, providing updates and addressing any questions or concerns you may have."},
    {text:"Cost Savings",description:"By leveraging our expertise, you can potentially reduce costs associated with customs duties and taxes. We help you maximize duty exemptions and ensure efficient use of your resources."},
  ]
  // "Expand your reach in Canada with our white labeling service. We'll create a custom brand for your products, ensuring they meet Canadian standards.",
