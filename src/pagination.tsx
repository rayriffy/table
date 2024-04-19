import { Button, HStack, Spacer, Text } from '@chakra-ui/react'

import type { Table } from '@tanstack/react-table'

export interface PaginationProps<TData> {
  table: Table<TData>
}

export const Pagination = <TData, _>({ table }: PaginationProps<TData>) => (
  <HStack>
    {table
      .getAllColumns()
      .map(c => c.id)
      .includes('select') && (
      <Text>
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </Text>
    )}
    <Spacer />
    <HStack>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        isDisabled={!table.getCanPreviousPage()}
      >
        Back
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        isDisabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </HStack>
  </HStack>
)
