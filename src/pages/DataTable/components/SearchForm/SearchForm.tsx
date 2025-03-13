import React, { useState, useEffect } from 'react'
import { StyledInput as Input } from '@/ui'
import { TUserFilter } from '@/types'

interface SearchFormProps {
  filters: TUserFilter
  setFilters: React.Dispatch<React.SetStateAction<TUserFilter>>
}

const SearchForm: React.FC<SearchFormProps> = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState<TUserFilter>(filters)

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilters(localFilters)
    }, 1000)

    return () => clearTimeout(delayDebounce)
  }, [localFilters])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <Input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={localFilters.email}
      />
      <Input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={localFilters.username}
      />
      <Input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={localFilters.firstName}
      />
      <Input
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={localFilters.lastName}
      />
      <Input
        name="company"
        placeholder="Company"
        onChange={handleChange}
        value={localFilters.company}
      />
    </div>
  )
}

export default SearchForm
