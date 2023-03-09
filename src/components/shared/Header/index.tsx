import { Mali } from 'next/font/google'
import { Navbar } from '../Navbar'
import { ThemeSwitcher } from './ThemeSwitcher'

const maliFont = Mali({
  weight: "500",
  subsets: ['latin'],
})

export const Header = () => {
  return (
    <header>
      <div className='px-4 pt-4 flex justify-between items-center h-auto'>
        <h1 className={`${maliFont.className} text-xl`}>BORGIM</h1>
        <ThemeSwitcher />
      </div>
      <Navbar />
    </header>
  )
}