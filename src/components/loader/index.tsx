import React from 'react'

import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { Flex } from '@chakra-ui/react'

const Component: React.FC = function () {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      pos="fixed"
      inset="0"
      zIndex={10000}
      bg="mauve.1200"
      color="mauve.100"
    >
      <Flex flexFlow="row nowrap" alignItems="center" justifyContent="center" pos="relative">
        <ChatBubbleIcon width={24} height={24} />
      </Flex>
    </Flex>
  )
}

export default Component
