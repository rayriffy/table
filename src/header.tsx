'use client'

import { Th, Thead, Tr } from '@chakra-ui/react'
import { flexRender, type Table } from '@tanstack/react-table'

export interface HeaderProps<TData> {
  table: Table<TData>
}

export const Header = <TData, _>({ table }: HeaderProps<TData>) => (
  <Thead>
    {table.getHeaderGroups().map(headerGroup => (
      <Tr key={headerGroup.id} h={12}>
        {headerGroup.headers.map(header => {
          return (
            <Th
              key={header.id}
              fontSize="md"
              color="gray.800"
              fontWeight="semibold"
              textTransform="capitalize"
              py={1}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </Th>
          )
        })}
      </Tr>
    ))}
  </Thead>
)
