import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

export const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '8px',
    transition: '0.3s ease-in-out',
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#007BFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0056b3',
      boxShadow: '0 0 5px rgba(0, 91, 187, 0.5)',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#666',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#0056b3',
  },
})
