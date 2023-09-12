import logoQibBlack from '../images/logos/qib-black.png'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image src={logoQibBlack} {...props} alt="QIB Logistics" />
  )
}
