import Link from 'next/link'

const MenuItem = ({ title, url, Icon }) => {
  return (
    <Link
      href={url}
      className='hover:text-amber-500'
    >
      <Icon className='text-2xl sm:hidden' />
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem
