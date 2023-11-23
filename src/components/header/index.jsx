import { useState } from "react"
import { Link } from "./links"
import { NavLink } from "react-router-dom"
import { MenuOpen, MenuClose } from "../buttons"


export default function Header () {
  const [open, setOpen] = useState(false)
  function menuToggle () {  
    return setOpen(!open)
  }

  return (
    <header className="h-20 flex flex-row justify-between items-center px-4 sticky top-0 left-0 bg-blue-50 md:px-10 z-10">
      <NavLink className={'md:text-2xl'} to={'/'}>Car dealership</NavLink>
      <MenuOpen open={open} setOpen={setOpen} />
      <ul className={open ? 'flex flex-col justify-center items-center gap-4 absolute bg-blue-50 top-0 left-0 w-screen h-screen md:w-[15%] md:left-auto md:right-0 md:backdrop-filter md:backdrop-blur-md md:bg-blue-50/50' : 'hidden'}>
        <li>
          <MenuClose open={open} setOpen={setOpen} />
        </li>
        <li>
          <Link to={'/'} menuToggle={menuToggle} setOpen={setOpen} open={open} > Home </Link>
        </li>
        <li>
        <Link to={'/cars'} menuToggle={menuToggle} setOpen={setOpen} open={open} > Cars </Link>
        </li>
        <li>
        <Link to={'/contact&us'} menuToggle={menuToggle} setOpen={setOpen} open={open} > Contact & us </Link>

        </li>
      </ul>
    </header>
  )
}