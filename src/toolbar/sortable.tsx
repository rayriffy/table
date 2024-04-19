'use client'

import { Button } from '@chakra-ui/react'
import { Icon } from '../commons/icon'

import type { PropsWithChildren } from 'react'
import type { Column } from '@tanstack/react-table'

export interface SortableHeaderProps<TData, TValue> extends PropsWithChildren {
  column: Column<TData, TValue>
}

export const SortableHeader = <TData, TValue>({
  column,
  children,
}: SortableHeaderProps<TData, TValue>) => (
  <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  >
    {children}
    <Icon icon="lucide:arrow-up-down" ml={1} />
  </Button>
)
