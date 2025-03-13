import { Outlet } from 'react-router-dom'
import { Header, StyledContainer } from '@/pages/Layout'

const Layout = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  )
}

export default Layout
