import { NavLink } from "react-router-dom"
import { ArrowIcon } from "../../../assets/icons"


export default function Model (params) {
  const {model, price, branding} = params
  const id = model
  return (
    <article className="min-w-full p-4 h-[14rem] flex flex-col justify-between hover:scale-105 transition-all duration-100">
      <section>
        <h3>{branding}{model}</h3>
        
      </section>
      <section className="flex flex-row items-center justify-between">
        <span>{price}</span>
        <NavLink className='flex items-center p-2 border-double border-spacing-1 border-2 border-white hover:border-blue-400 transition-all duration-200 hover:text-blue-400' to={`/cars/${id}`}>{<ArrowIcon/>} See more</NavLink>
      </section>

    </article>
  )
} 