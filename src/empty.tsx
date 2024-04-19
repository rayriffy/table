import { memo } from 'react'
import { Icon } from 'react-iconify-icon-wrapper'
import { Heading, Text, VStack } from '@chakra-ui/react'

export const Empty = memo(() => (
  <VStack py={20} spacing={2}>
    <Icon icon="lucide:box-select" width={64} height={64} />
    <Heading size="md" mt={4}>
      No matching items found
    </Heading>
    <Text>Please add more data, and try again.</Text>
  </VStack>
))
