import { Navbar } from '@/components'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Navbar />
    </header>
  )
}

export default Header
