import { StyledInput as Input } from "./StyledInput.style"
import { TStyledInput } from "./StyledInput.types"

const StyledInput: React.FC<TStyledInput> = ({...props }) => {
  return (
    <Input {...props}>
      {props.children}
    </Input>
  )
}

export default StyledInput
