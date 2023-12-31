import Image from 'next/image'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import logoLaravel from '../images/logos/laravel.svg'
import logoMirage from '../images/logos/mirage.svg'
import logoStatamic from '../images/logos/statamic.svg'
import logoStaticKit from '../images/logos/statickit.svg'
import logoTransistor from '../images/logos/transistor.svg'
import logoTuple from '../images/logos/tuple.svg'
import logoQibBlack from '../images/logos/qib-black.png'
import bglogos from '../images/background-logos.png'
import { GradientButton } from './GradientButton'

const logoMongodb = "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
const logoReact = "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
const logoStripe = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
const logoAuth0 = "https://logowik.com/content/uploads/images/auth01606.jpg"
const logoNextjs = 'https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp'
const logoAws = "https://miro.medium.com/v2/resize:fit:1400/1*b_al7C5p26tbZG4sy-CWqw.png"
export function Hero() {

  return (
  <>
   <div className='bg-black relative overflow-hidden max-w-screen'>
    <Image
      alt="Truck"
        className="absolute blur-sm  top-0 max-w-none -translate-y-1/4 opacity-[0.55] "
        // src="https://w0.peakpx.com/wallpaper/579/968/HD-wallpaper-dark-road-night.jpg"
        // src="https://media2.giphy.com/media/7sE3k7bH5CK1a/giphy.gif?cid=ecf05e473jlb4sb5a4qjeu98go54rqr4xdbxla4c37t06bar&ep=v1_gifs_related&rid=giphy.gif&ct=g"
src="https://media1.giphy.com/media/UVTMFrWQBsRyctpP0R/giphy.gif?cid=ecf05e47vxj2hi1123vc0h3xyj3uklfwyed5psyrdeyow6fk&ep=v1_gifs_search&rid=giphy.gif&ct=g"  
        width={1600}
        height={800}
        unoptimized
      />
     
   
     <Container className="pb-16 pt-20 text-center lg:pt-32 relative text-white ">
     
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight  sm:text-7xl">
       {' '}
        <span className="relative whitespace-nowrap text-orange">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-slate-900/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange to-violet">Cargo Solutions<br/></span>
        </span>{' '}
        Tailored for You
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-zinc-300 font-semibold ">
      Welcome to QIB Logistics (QuickCargo)! We specialize in helping Canada connect with the world through imports and exports. Explore our services and products to discover how we can meet your needs.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        {/* <Button color="white" href="/register">Connect with us</Button> */}
        <GradientButton gradient={true} href="/register">Connect with us</GradientButton>

        <GradientButton
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          
        >
          {/* <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg> */}
          Learn more
        </GradientButton>
      </div>
     
    </Container>
  
   </div>
   {/* <div className='bg-[#e2e2e2]'>
   <Container >
    <div className="py-16">
    <Image src={bglogos} alt={"QIB"} unoptimized width={700} height={100} className='mx-auto'/>

         </div>
                  </Container>
   </div> */}
  
  </>
  )
}
