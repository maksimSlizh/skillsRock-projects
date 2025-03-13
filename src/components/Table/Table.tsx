import React from 'react'
import { Table as AntdTable } from 'antd'
import { IUser } from '@/types'

interface TableProps {
  data: IUser[]
  isFetching: boolean
}

const Table: React.FC<TableProps> = ({ data = [], isFetching }) => {
  const columns = data.length
    ? Object.keys(data[0])
        .filter((key) => key !== 'id' && key !== 'password')
        .map((key) => ({
          title: key.toUpperCase(),
          dataIndex: key,
          key: key,
        }))
    : []

  return (
    <AntdTable
      columns={columns}
      dataSource={data.map((item, index) => ({ ...item, key: index }))}
      loading={isFetching}
      pagination={{ pageSize: 10 }}
    />
  )
}

export default Table
