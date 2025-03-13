import React, { useState, useEffect } from 'react'
import { useLazyGetUsersByFilterQuery } from '@/api/usersApi'
import { SearchForm } from '@/pages/DataTable/components'
import { Table } from '@/components'
import { TUserFilter } from '@/types'

const DataTable: React.FC = () => {
  const [filters, setFilters] = useState<TUserFilter>({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    company: '',
  })

  const [trigger, { data = [], isFetching }] = useLazyGetUsersByFilterQuery()

  useEffect(() => {
    trigger(filters)
  }, [filters, trigger])

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <SearchForm filters={filters} setFilters={setFilters} />
      <Table data={data} isFetching={isFetching} />
    </div>
  )
}

export default DataTable
