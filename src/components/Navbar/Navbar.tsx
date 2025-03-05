import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

interface INavigationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  variant?: 'header' | 'footer'
}

const links = [
  { name: 'Todo', path: '/todo' },
  { name: 'Todo RTK', path: '/todo-rtk' },
  { name: 'Auth', path: '/auth' },
]

const Navbar: React.FC<INavigationProps> = () => {
  return (
    <nav className={style.nav}>
      {links.map(({ name, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            isActive ? `${style.nav__link} ${style.active}` : style.nav__link
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
