import {
  Container,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from '@chakra-ui/react'
import { Icon } from 'react-iconify-icon-wrapper'

import { data } from './data'

import { Table, SortableHeader } from '@rayriffy/table'

import type { ColumnDef } from '@tanstack/react-table'
import type { Booth } from './data'

const columnDef: ColumnDef<Booth>[] = [
  {
    id: 'Booth',
    accessorKey: 'name',
    header: ({ column }) => (
      <SortableHeader column={column}>Booth</SortableHeader>
    ),
    cell: ({ row }) => (
      <HStack>
        <Text fontWeight="semibold">{row.original.name}</Text>
      </HStack>
    ),
  },
  {
    id: 'Cost',
    accessorKey: 'cost',
    header: ({ column }) => (
      <SortableHeader column={column}>Cost</SortableHeader>
    ),
    cell: ({ row }) => <Text>¥{row.original.cost.toLocaleString()}</Text>,
  },
  {
    id: 'Day',
    accessorKey: 'day',
    enableSorting: false,
  },
  {
    id: 'Location',
    accessorKey: 'booth',
    enableSorting: false,
  },
  {
    id: 'Hall',
    accessorKey: 'location',
    header: ({ column }) => (
      <SortableHeader column={column}>Hall</SortableHeader>
    ),
  },
  {
    id: 'options',
    cell: () => (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Icon icon="lucide:more-vertical" />}
          variant="outline"
          size="sm"
        />
        <Portal>
          <MenuList>
            <MenuItem>Open</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    ),
    enableSorting: false,
    enableHiding: false,
  },
]

export const App = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Table
        data={data}
        columns={columnDef}
        defaultSorting={[{ id: 'name', desc: false }]}
      />
    </Container>
  )
}
