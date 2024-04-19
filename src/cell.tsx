import { flexRender } from '@tanstack/react-table'
import { Td } from '@chakra-ui/react'

import type { Cell as TanStackCell, Row } from '@tanstack/react-table'

export interface CellProps<TData> {
  cell: TanStackCell<TData, any>
  row: Row<TData>
  onClick?: (row: Row<TData>) => void
}

export const Cell = <TData, _>({ cell, row, onClick }: CellProps<TData>) => (
  <Td
    onClick={
      cell.column.id !== 'options' && onClick ? () => onClick(row) : undefined
    }
  >
    {flexRender(cell.column.columnDef.cell, cell.getContext())}
  </Td>
)
