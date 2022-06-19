import type { ToastThemeObject, ToastProps } from './type'
import React from 'react'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons'

const Toast: React.FC<ToastProps> = function ({ title, status }) {
  const theme: ToastThemeObject = {
    default: {
      container: {
        border: '1px solid',
        borderColor: 'mauve.900',
        bgColor: 'mauve.1000',
      },
      children: { color: 'white' },
    },
    success: {
      icon: <CheckCircledIcon width="18px" height="18px" />,
      container: { bgColor: 'green.500' },
      children: { color: '#fff' },
    },
    warn: {
      icon: <ExclamationTriangleIcon width="18px" height="18px" />,
      container: { bgColor: 'yellow.500' },
      children: { color: '#fff' },
    },
    error: {
      icon: <CrossCircledIcon width="18px" height="18px" />,
      container: { bgColor: 'red.500' },
      children: { color: '#fff' },
    },
    info: {
      icon: <InfoCircledIcon width="18px" height="18px" />,
      container: { bgColor: 'blue.400' },
      children: { color: '#fff' },
    },
  }

  return (
    <Flex
      flexFlow="row nowrap"
      alignItems="flex-start"
      justifyContent="center"
      py="14px"
      px="16px"
      pos="relative"
      overflow="hidden"
      borderRadius="6px"
      boxShadow="0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"
      gap="6px"
      {...theme[status || 'default'].container}
    >
      {status && theme[status || 'default'].icon ? (
        <Box
          w="24px"
          h="24px"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
          as="span"
        >
          {theme[status || 'default'].icon}
        </Box>
      ) : null}
      <Box maxW="100%" flex={1}>
        <Box
          mr="8px"
          lineHeight="24px"
          fontWeight="normal"
          {...theme[status || 'default'].children}
        >
          {title}
        </Box>
      </Box>
    </Flex>
  )
}

export default Toast
