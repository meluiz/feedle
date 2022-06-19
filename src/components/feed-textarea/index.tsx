import type { EditorObject } from './type'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Actions from './actions'
import Editor from './editor'
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'

const Component: React.FC = function () {
  const limiter = useRef(1024)
  const [editor, updateEditor] = useState<EditorObject>({
    hashtags: null,
    links: null,
    files: null,
    plaintext: '',
  })

  return (
    <Box w="100%" h="100%" display="block" p="16px" pos="relative">
      <Flex
        w="100%"
        flexFlow="row nowrap"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="12px"
      >
        <Flex
          w="48px"
          h="100%"
          flexDir="column"
          alignItems="center"
          justifyContent="flex-start"
          flexShrink={0}
          flexGrow={0}
          pos="relative"
        >
          <Flex display="inline-flex" as={Link} to="/:user">
            <Flex
              w="44px"
              h="44px"
              alignItems="center"
              justifyContent="center"
              borderRadius="9999px"
              pos="relative"
              overflow="hidden"
              as="figure"
              aria-label="Avatar do usuário"
            >
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
                src="https://avatars.githubusercontent.com/u/52682525?v=4"
                alt="Avatar do meluiz"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          flexDir="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          gap="8px"
          pos="relative"
        >
          <Flex
            w="100%"
            flexDir="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            pos="relative"
            gap="8px"
          >
            <Box w="100%" display="block" pos="relative">
              <Editor updateEditor={updateEditor} />
            </Box>
            <Flex
              w="100%"
              flexFlow="row nowrap"
              alignItems="center"
              justifyContent="space-between"
              pos="relative"
            >
              <Actions updateEditor={updateEditor} />
              <Flex
                flexFlow="row nowrap"
                alignItems="center"
                justifyContent="flex-emd"
                pos="relative"
                gap="16px"
              >
                {limiter.current - editor.plaintext.length <= 0 ? (
                  <Flex
                    w="32px"
                    h="32px"
                    border={
                      limiter.current - editor.plaintext.length === 0 ? '3px solid' : undefined
                    }
                    borderColor="red.500"
                    borderRadius="999px"
                    alignItems="center"
                    justifyContent="center"
                    pos="relative"
                  >
                    <Text color="red.500" fontSize="14px" fontWeight="semibold">
                      {limiter.current - editor.plaintext.length}
                    </Text>
                  </Flex>
                ) : (
                  <Flex w="34px" h="34px" alignItems="center" justifyContent="center">
                    <CircularProgress
                      size={limiter.current - editor.plaintext.length <= 20 ? '34px' : '28px'}
                      thickness="8px"
                      value={(editor.plaintext.length / limiter.current) * 100}
                      color={
                        limiter.current - editor.plaintext.length <= 20
                          ? 'yellow.500'
                          : 'green.500'
                      }
                      sx={{
                        svg: {
                          transition: '300ms ease',
                          circle: { transitionDuration: '0ms' },
                        },
                      }}
                    >
                      {limiter.current - editor.plaintext.length <= 20 && (
                        <CircularProgressLabel
                          fontSize="14px"
                          color="yellow.500"
                          fontWeight="semibold"
                        >
                          {limiter.current - editor.plaintext.length}
                        </CircularProgressLabel>
                      )}
                    </CircularProgress>
                  </Flex>
                )}
                <Box w="1px" h="24px" display="block" pos="relative" bg="mauve.900" />
                <Button
                  bg="whiteAlpha.200"
                  _hover={{ bg: 'whiteAlpha.300' }}
                  _active={{ bg: 'whiteAlpha.400' }}
                  aria-label="Publicar conteúdo"
                >
                  Publicar
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Component
