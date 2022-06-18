import React from 'react'
import { Link } from 'react-router-dom'

import { useApplicationContext } from 'contexts'

import { ArchiveIcon, BellIcon } from '@radix-ui/react-icons'
import { Box, Button, Flex, Text } from '@chakra-ui/react'

const Component: React.FC = function () {
  const { breakpoint } = useApplicationContext()

  return (
    <Box
      h="100%"
      display={{
        base: 'none',
        lg: 'block',
      }}
      pos="relative"
      px="8px"
    >
      <Flex
        w="100%"
        h="100%"
        flexFlow="row nowrap"
        alignItems="center"
        justifyContent="space-between"
        pos="relative"
      >
        <Flex
          flexFlow="row nowrap"
          alignItems="center"
          justifyContent="flex-start"
          gap="4px"
          pos="relative"
        >
          <Flex display="inline-flex" as={Link} to="/" aria-label="Feedle" role="link">
            <Text
              textTransform="lowercase"
              fontFamily="cursive"
              fontSize="22px"
              fontWeight="normal"
              as="span"
            >
              {breakpoint.xl ? 'feedle' : 'fe'}
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexFlow="row nowrap"
          alignItems="center"
          justifyContent="flex-end"
          gap="4px"
          pos="relative"
        >
          <Button
            p="0"
            pos="relative"
            bg="transparent"
            color="mauve.100"
            _hover={{ bg: 'mauve.1100' }}
            _active={{ bg: 'mauve.1000' }}
          >
            <ArchiveIcon width="20px" height="20px" />
          </Button>
          <Button
            p="0"
            pos="relative"
            bg="transparent"
            color="mauve.100"
            _hover={{ bg: 'mauve.1100' }}
            _active={{ bg: 'mauve.1000' }}
          >
            <Text display="inline-block" as="span">
              <BellIcon width="20px" height="20px" />
            </Text>
            {/* Notification Bullet
          <Box
            w="8px"
            h="8px"
            border="2px solid"
            borderColor="mauve.1200"
            borderRadius="9999px"
            pos="absolute"
            bottom="24%"
            right="26%"
            bg="yellow.500"
          /> */}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Component
