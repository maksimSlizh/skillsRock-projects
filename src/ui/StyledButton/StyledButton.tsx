import { StyledButton as Button } from './StyledButton.style'
import { TStyledButton } from './StyledButton.type'

const StyledButton: React.FC<TStyledButton> = ({...props }) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

export default StyledButton
