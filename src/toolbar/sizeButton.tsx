'use client'

import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  Text,
  PopoverTrigger,
  Portal,
  HStack,
  VStack,
  Box,
} from '@chakra-ui/react'
import { Icon } from 'react-iconify-icon-wrapper'

import type { StateHook, TableSize } from '../types'

interface Props {
  size: StateHook<TableSize>
}

const sizeOptions: [TableSize, string][] = [
  ['sm', 'Compact'],
  ['md', 'Regular'],
]

export const SizeButton = ({ size: [size, setSize] }: Props) => (
  <Popover>
    <PopoverTrigger>
      <Button variant="ghost" size="sm">
        <HStack>
          <Icon icon="lucide:chevrons-up-down" />
          <Text>Size</Text>
          <Icon icon="lucide:chevron-down" />
        </HStack>
      </Button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent w="unset">
        <PopoverBody zIndex={10}>
          <VStack py={1} spacing={0} align="stretch">
            {sizeOptions.map(([value, label]) => (
              <Button
                key={`table-size-${value}-${size === value ? 'on' : 'off'}`}
                size="sm"
                variant="ghost"
                justifyContent="start"
                onClick={() => setSize(value)}
              >
                <HStack>
                  {size === value ? (
                    <Icon icon="lucide:check" width={16} />
                  ) : (
                    <Box w={4} />
                  )}
                  <Text fontSize="md" fontWeight="normal">
                    {label}
                  </Text>
                </HStack>
              </Button>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  </Popover>
)
