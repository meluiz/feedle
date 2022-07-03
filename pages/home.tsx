import React from 'react'

import { FeedTextarea } from 'components'
import { Box, Flex } from '@chakra-ui/react'

const Page = function () {
  return (
    <Flex flexDir="column" alignItems="flex-start" justifyContent="center" pos="relative">
      <Box w="100%" borderBottom="1px solid" borderColor="mauve.1000" pos="relative">
        <Box w="100%" h="100%" display="block" bg="inherit" pos="relative">
          <FeedTextarea />
        </Box>
      </Box>
    </Flex>
  )
}

export default Page
