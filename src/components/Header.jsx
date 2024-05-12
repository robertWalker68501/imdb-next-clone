import MenuItem from '@/components/MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from '@/components/DarkModeSwitch'

const Header = () => {
  return (
    <header>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
          <MenuItem
            title='home'
            url='/'
            Icon={AiFillHome}
          />
          <MenuItem
            title='about'
            url='/about'
            Icon={BsFillInfoCircleFill}
          />
        </div>

        <div className='flex items-center gap-4'>
          <DarkModeSwitch />
          <Link
            href='/'
            className='flex gap-1 items-center'
          >
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
