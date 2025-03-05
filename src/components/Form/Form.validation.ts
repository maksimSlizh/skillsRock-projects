import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required').min(2, 'Too Short!').max(50, 'Too Long!'),
  lastName: Yup.string().required('Required').min(2, 'Too Short!').max(50, 'Too Long!'),
  dateOfBirth: Yup.string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Invalid date format (dd.mm.yyyy)')
    .required('Required'),
  company: Yup.string().required('Required').min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
})
