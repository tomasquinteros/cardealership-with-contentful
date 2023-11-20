import { MenuIcon, CloseIcon } from "../../assets/icons"
export const MenuOpen = (params) => {
  const {open, setOpen} = params
  return (
    <button className={!open ? 'block' : 'hidden' } onClick={() => setOpen(!open)}>
        <MenuIcon/>
    </button>
  )
} 
export const MenuClose = (params) => {
  const {open, setOpen} = params
  return (
    <button onClick={() => setOpen(!open)} className="hover:text-cyan-400 transition-all md:right-0 md:top-0 md:absolute md:p-8 md:text-2xl">
      <CloseIcon />
    </button>
  )
}