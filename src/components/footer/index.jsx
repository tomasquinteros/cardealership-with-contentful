import { LinkdinIcon, GithubIcon } from "../../assets/icons"

export default function Footer () {
  return (
    <footer className="text-center h-20 bg-blue-50">
      <h1>Create by Tomas Quinteros</h1>
      <section className="flex flex-row items-center justify-center p-2 gap-4">
        <a className="hover:scale-125 hover:text-blue-400 transition-all duration-75" href="https://www.linkedin.com/in/tomasquinteros-dev/" target="_blank" rel="noopener noreferrer">
          <LinkdinIcon/>
        </a>
        <a className="hover:scale-125 hover:text-blue-400 transition-all duration-75" href="https://github.com/tomasquinteros" target="_blank" rel="noopener noreferrer">
          <GithubIcon/>
        </a>
      </section>
    </footer>
  )
} 