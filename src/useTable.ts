import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table'

interface Options<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  defaults?: {
    sorting?: SortingState
    filter?: ColumnFiltersState
    visibility?: VisibilityState
  }
}

export const useTable = <TData, TValue>({
  data,
  columns,
  defaults,
}: Options<TData, TValue>) => {
  const parsedDefaults = {
    sorting: [],
    filter: [],
    visibility: {},
    ...defaults,
  }

  const [sorting, setSorting] = useState<SortingState>(parsedDefaults.sorting)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    parsedDefaults.filter
  )
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    parsedDefaults.visibility
  )
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return table
}
