import { Home, User, Pencil, Cpu } from 'lucide-react'
import { NavLinks } from './NavLinks'

export const Navbar = () => {

  interface InavSegment {
    name: string
    href: string
    icon: React.ReactNode
    targetSegment: string | null
  }

  const navSegments: InavSegment[] = [
    {
      name: 'home',
      href: '/',
      icon: <Home />,
      targetSegment: null
    },
    {
      name: 'about',
      href: '/about',
      icon: <User />,
      targetSegment: 'favorites'
    },
    {
      name: 'projects',
      href: '/projects',
      icon: <Cpu />,
      targetSegment: 'favorites'
    },
    {
      name: 'blog',
      href: '/blog',
      icon: <Pencil />,
      targetSegment: 'favorites'
    }
  ]

  return (
    <div className='w-full px-4 fixed bottom-4'>
      <nav className='flex justify-between bg-slate-800 w-full h-auto rounded-lg'>
        {
          navSegments.map((segment) => {
            return (
              <NavLinks key={segment.targetSegment} {...segment} />
            )
          })
        }
      </nav>
    </div>
  )
}