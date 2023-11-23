import { useEffect, useState } from 'react'
import heroImages from '../../assets/hero-home/images.json'
import RandomNumber from '../../vanilla/number-random'
import { NavLink } from 'react-router-dom'
import Brandings from '../brandings'

export default function Home () {
  const [image, setImage] = useState(heroImages[0])
  const [hoverButton, setHoverButton] = useState(false)
  
  useEffect(() => {
    setInterval(() => {
      if (hoverButton) return setHoverButton(false)
      setImage(heroImages[RandomNumber(3)])
    }, 5000)
  }, [image, hoverButton]) 


  return (
    <div className='min-h-screen object-cover' 
    style={{
      backgroundImage: `url(${heroImages[2].url})`,
    }}>
      <div className='min-h-screen flex flex-col justify-center items-center backdrop-blur-sm'>
        <NavLink
          className='hover-button' to='/cars'
        >
          Cars
        </NavLink>
        <Brandings></Brandings>
      </div>
      </div>
  )
}