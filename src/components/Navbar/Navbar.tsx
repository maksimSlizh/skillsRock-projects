import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

interface INavigationProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    variant?: 'header' | 'footer'
}

export const Navbar: React.FC<INavigationProps> = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/todo">Todo</NavLink>
    </nav>
  )
}
