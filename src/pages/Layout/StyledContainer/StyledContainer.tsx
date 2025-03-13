import React, { ReactNode } from 'react'
import StyledContainerWrapper from './StyledContainer.style'

interface StyledContainerProps {
  children: ReactNode
}

const StyledContainer: React.FC<StyledContainerProps> = ({ children }) => {
  return <StyledContainerWrapper>{children}</StyledContainerWrapper>
}

export default StyledContainer
