import { Box, Divider, HStack, Input, Spacer } from '@chakra-ui/react'
import type { Table } from '@tanstack/react-table'

import { SizeButton } from './sizeButton'
import { ColumnFilter } from './columnFilter'

import type { StateHook, TableSize } from '../types'

export interface ToolbarProps<TData> {
  table: Table<TData>
  size: StateHook<TableSize>
}

export const Toolbar = <TData, _>({ table, size }: ToolbarProps<TData>) => (
  <Box position="sticky" left={0}>
    <Box
      display={{
        base: 'block',
        sm: 'flex',
      }}
      gap={4}
      p={2}
    >
      <Input
        size="sm"
        rounded="md"
        placeholder="Search..."
        maxW={{
          base: 'unset',
          sm: 'xs',
        }}
        onChange={e => table.setGlobalFilter(e.target.value)}
      />
      <Spacer />
      <HStack
        justifyContent={{
          base: 'space-between',
          sm: 'start',
        }}
        pt={{
          base: 2,
          sm: 0,
        }}
      >
        <SizeButton size={size} />
        <ColumnFilter table={table} />
      </HStack>
    </Box>
    <Divider orientation="horizontal" />
  </Box>
)
