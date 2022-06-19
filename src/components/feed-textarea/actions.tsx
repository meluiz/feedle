import { Button, Flex, Text, Tooltip } from '@chakra-ui/react'
import { CalendarIcon, ImageIcon } from '@radix-ui/react-icons'
import React from 'react'

const Component: React.FC = function () {
  return (
    <Flex
      flexFlow="row nowrap"
      alignItems="center"
      justifyContent="flex-start"
      pos="relative"
      gap="4px"
    >
      <Tooltip label="Mídia" bg="mauve.1000" color="white" openDelay={600}>
        <Button
          w="32px"
          h="44px"
          minW="32px"
          p="0"
          pos="relative"
          bg="transparent"
          _hover={{
            bg: 'transparent',
            _before: {
              opacity: 1,
              bg: 'mauve.1000',
            },
          }}
          _active={{
            bg: 'transparent',
            _before: {
              opacity: 1,
              bg: 'mauve.00',
            },
          }}
          _before={{
            content: '""',
            w: '32px',
            h: '32px',
            opacity: 0,
            borderRadius: '9999px',
            pos: 'absolute',
            bg: 'mauve.1000',
          }}
          aria-label="Adicionar uma imagem"
        >
          <Text display="inline-block" pos="relative" color="mauve.200" as="span">
            <ImageIcon width="18px" height="18px" />
          </Text>
        </Button>
      </Tooltip>
      <Tooltip label="Programar" bg="mauve.1000" color="white" openDelay={600}>
        <Button
          w="32px"
          h="44px"
          minW="32px"
          p="0"
          pos="relative"
          bg="transparent"
          _hover={{
            bg: 'transparent',
            _before: {
              opacity: 1,
              bg: 'mauve.1000',
            },
          }}
          _active={{
            bg: 'transparent',
            _before: {
              opacity: 1,
              bg: 'mauve.900',
            },
          }}
          _before={{
            content: '""',
            w: '32px',
            h: '32px',
            opacity: 0,
            borderRadius: '9999px',
            pos: 'absolute',
            bg: 'mauve.1000',
          }}
          aria-label="Programar publicação"
        >
          <Text display="inline-block" pos="relative" color="mauve.200" as="span">
            <CalendarIcon width="18px" height="18px" />
          </Text>
        </Button>
      </Tooltip>
    </Flex>
  )
}

export default Component
