import { StyledInput, StyledButton } from '@/ui'
import { StyledForm } from './StyledForm.style'
import { FormikProvider, useFormik } from 'formik'
import { Box } from '@mui/material'
import { validationSchema } from './Form.validation'
import { useAddUserMutation } from '@/api/usersApi'

interface IInitialValues {
  nickname: string
  firstName: string
  lastName: string
  dateOfBirth: string
  company: string
  email: string
  password: string
  confirmPassword: string
}

const initialValues: IInitialValues = {
  nickname: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  company: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Form = () => {
  const [addUser] = useAddUserMutation()

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        const newUser = {
          id: Date.now().toString(), // Генерация ID
          email: values.email,
          password: values.password,
          username: values.nickname,
          firstName: values.firstName,
          lastName: values.lastName,
          company: values.company,
        }
        await addUser(newUser).unwrap()
        console.log('User added:', newUser)
        resetForm()
      } catch (error) {
        console.error('Failed to add user:', error)
      }
    },
  })

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    submitCount,
  } = formik

  return (
    <FormikProvider value={formik}>
      <StyledForm onSubmit={handleSubmit}>
        {/* Блок 1: Nickname, First Name, Last Name */}
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gap={2}
          width="100%"
        >
          <StyledInput
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.nickname}
            label="Nickname"
            variant="outlined"
            helperText={submitCount > 0 ? errors.nickname : ''}
          />
          <StyledInput
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.firstName}
            label="First Name"
            variant="outlined"
            helperText={submitCount > 0 ? errors.firstName : ''}
          />
          <StyledInput
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.lastName}
            label="Last Name"
            variant="outlined"
            helperText={submitCount > 0 ? errors.lastName : ''}
          />
        </Box>

        {/* Блок 2: Date of Birth, Company, Email */}
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gap={2}
          width="100%"
        >
          <StyledInput
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.dateOfBirth}
            label="Date of Birth (dd.mm.yyyy)"
            variant="outlined"
            helperText={submitCount > 0 ? errors.dateOfBirth : ''}
          />
          <StyledInput
            name="company"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.company}
            label="Company"
            variant="outlined"
            helperText={submitCount > 0 ? errors.company : ''}
          />
          <StyledInput
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.email}
            label="Email"
            variant="outlined"
            helperText={submitCount > 0 ? errors.email : ''}
          />
        </Box>

        {/* Блок 3: Password, Confirm Password */}
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} width="100%">
          <StyledInput
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.password}
            label="Password"
            variant="outlined"
            helperText={submitCount > 0 ? errors.password : ''}
          />
          <StyledInput
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={submitCount > 0 && !!errors.confirmPassword}
            label="Confirm Password"
            variant="outlined"
            helperText={submitCount > 0 ? errors.confirmPassword : ''}
          />
        </Box>

        {/* Блок 4: Button */}
        <Box mt={2} textAlign="center">
          <StyledButton variant="contained" type="submit">
            Submit
          </StyledButton>
        </Box>
      </StyledForm>
    </FormikProvider>
  )
}

export default Form
