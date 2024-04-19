'use client'

import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  Switch,
  Text,
  PopoverTrigger,
  Portal,
  HStack,
  VStack,
  Box,
} from '@chakra-ui/react'

import { Icon } from '../commons/icon'

import type { Table as TanStackTable } from '@tanstack/react-table'

interface Props<TData> {
  table: TanStackTable<TData>
}

export const ColumnFilter = <TData,>({ table }: Props<TData>) => (
  <Popover>
    <PopoverTrigger>
      <Button variant="ghost" size="sm">
        <HStack>
          <Icon icon="lucide:columns" />
          <Text>Columns</Text>
          <Icon icon="lucide:chevron-down" />
        </HStack>
      </Button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent w="unset">
        <PopoverBody zIndex={10}>
          <VStack py={1} spacing={0} align="stretch">
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map(column => {
                const key = 'dataTable-' + column.id
                return (
                  <Button
                    key={`column-filter-${key}`}
                    size="sm"
                    variant="ghost"
                    justifyContent="start"
                    onClick={() => column.toggleVisibility()}
                  >
                    <HStack>
                      <Box pointerEvents="none">
                        <Switch isChecked={column.getIsVisible()} />
                      </Box>
                      <Text fontSize="md" fontWeight="normal">
                        {column.id}
                      </Text>
                    </HStack>
                  </Button>
                )
              })}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  </Popover>
)
