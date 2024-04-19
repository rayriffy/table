import { Tr } from '@chakra-ui/react'

import { Cell } from './cell'

import type { Row as TanStackRow } from '@tanstack/react-table'

export interface RowProps<TData> {
  row: TanStackRow<TData>
  onRowClick?: (row: TanStackRow<TData>) => void
}

export const Row = <TData, _>({ row, onRowClick }: RowProps<TData>) => (
  <Tr
    key={row.id}
    data-state={row.getIsSelected() && 'selected'}
    cursor={onRowClick ? 'pointer' : undefined}
    _hover={
      onRowClick
        ? {
            bgColor: 'gray.100',
            transitionDuration: '0.2s',
          }
        : undefined
    }
  >
    {row.getVisibleCells().map(cell => (
      <Cell
        key={cell.id}
        cell={cell}
        row={row}
        onClick={
          cell.column.id !== 'options' && onRowClick
            ? () => onRowClick(row)
            : undefined
        }
      />
    ))}
  </Tr>
)
