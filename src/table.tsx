'use client'

import { useState } from 'react'
import {
  Table as ChakraTable,
  Tbody,
  TableContainer,
  VStack,
  Card,
} from '@chakra-ui/react'

import { Pagination } from './pagination'
import { Toolbar } from './toolbar'
import { Header } from './header'
import { Empty } from './empty'
import { Row as DataRow } from './row'

import type { TableContainerProps } from '@chakra-ui/react'
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  Row,
} from '@tanstack/react-table'

import type { TableSize } from './types'
import { useTable } from './useTable'

export interface TableProps<TData, TValue> extends TableContainerProps {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  disableToolbar?: boolean
  onRowClick?: (row: Row<TData>) => void
  defaultSorting?: SortingState
  defaultFilters?: ColumnFiltersState
  defaultVisibility?: VisibilityState
}

export const Table = <TData, TValue>({
  columns,
  data,
  onRowClick,
  disableToolbar = false,
  defaultSorting = [],
  defaultFilters = [],
  defaultVisibility = {},
  ...rest
}: TableProps<TData, TValue>) => {
  const [tableSize, setTableSize] = useState<TableSize>('md')

  const table = useTable({
    data,
    columns,
    defaults: {
      filter: defaultFilters,
      sorting: defaultSorting,
      visibility: defaultVisibility,
    },
  })

  return (
    <VStack align="stretch" spacing={4}>
      <TableContainer as={Card} variant="outline" {...rest}>
        {!disableToolbar && (
          <Toolbar table={table} size={[tableSize, setTableSize]} />
        )}
        <ChakraTable variant="simple" size={tableSize}>
          <Header table={table} />
          <Tbody>
            {!!table.getRowModel().rows?.length &&
              table
                .getRowModel()
                .rows.map(row => <DataRow key={row.id} row={row} />)}
          </Tbody>
        </ChakraTable>
        {!table.getRowModel().rows?.length && <Empty />}
      </TableContainer>
      <Pagination table={table} />
    </VStack>
  )
}
