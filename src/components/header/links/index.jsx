import { NavLink } from "react-router-dom"

export const Link =  (params) => {
  const { children, to, setOpen, open} = params
  return (
    <NavLink to={to} className='hover:text-cyan-400 transition-all md:text-2xl' onClick={() => setOpen(!open)}>
      {children}
    </NavLink>
  )
}