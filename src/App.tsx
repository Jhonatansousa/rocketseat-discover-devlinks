import { useState } from "react"
import { LinkBtn } from "./components/Button"
import { GithubLogo, InstagramLogo, YoutubeLogo, LinkedinLogo } from '@phosphor-icons/react'
import avatarLight from '/avatar-light.png'
import avatar from '/avatar.png'
import moon from '/MoonStars.svg'
import sun from '/Sun.svg'

function App() {

  const [darkmode, setDarkmode] = useState(false)

  function handleDarkmode() {
    setDarkmode(!darkmode)
  }

  return (
    <div className={darkmode ? 'dark' + ' h-screen text-center bg-cover bg-dark-mobile pt-14 transition-all ease-linear md:bg-desktop-dark' : 'h-screen text-center bg-cover bg-light-mobile pt-14 transition-all ease-linear md:bg-desktop-light'}>
      <div className="p-6">
        <img className="w-28 h-28 mx-auto" src={darkmode ? avatar : avatarLight} alt="avatar photo icon" />
        <p className="text-base text-text-color-light-mode mt-2 dark:text-text-color-dark-mode">@maykbrito</p>
      </div>


      <div onClick={handleDarkmode} className="cursor-pointer flex items-center justify-start dark:justify-end h-6 bg-surface-color-light-mode w-16 mx-auto mb rounded-full border border-stroke-color-light-mode relative dark:bg-surface-color-dark-mode dark:border-stroke-color-dark-mode">
        <div className="h-8 w-8 bg-white rounded-full transition-transform -translate-x-1 dark:translate-x-1">
          <img className="w-4 h-full m-auto select-none" src={darkmode ? sun : moon} alt="toggle dark mode icon" />
        </div>
      </div>


      <div className="flex-col gap-4 p-6 flex">
        <LinkBtn urlLink="#" content="Inscreva-se no NLW" />
        <LinkBtn urlLink="#" content="Baixe meu e-book" />
        <LinkBtn urlLink="#" content="Veja meu portfólio" />
        <LinkBtn urlLink="#" content="Conheça o Explorer" />
      </div>

      <div className="flex justify-center gap-4 my-6">
        <a className="p-2 hover:bg-highlight-color-light-mode mt-6 rounded-full transition dark:text-text-color-dark-mode" href="#">
          <GithubLogo size={32} />
        </a>
        <a className="mt-6 hover:bg-highlight-color-light-mode p-2 rounded-full transition dark:text-text-color-dark-mode" href="#">
          <InstagramLogo size={32} />
        </a>
        <a className="p-2 mt-6 hover:bg-highlight-color-light-mode rounded-full transition dark:text-text-color-dark-mode" href="#">
          <YoutubeLogo size={32} />
        </a>
        <a className="mt-6 hover:bg-highlight-color-light-mode p-2 rounded-full transition dark:text-text-color-dark-mode" href="#">
          <LinkedinLogo size={32} />
        </a>
      </div>

      <div className="py-6">
        <p className="text-text-color-light-mode dark:text-text-color-dark-mode">
          Feito com &hearts; pela
          <a className="ml-1.5 underline" href="#">Rocketseat</a>
        </p>
      </div>
    </div>

  )
}

export default App
