import type { LayoutProps } from './type'
import React, { Fragment, useEffect, useState } from 'react'

import { Header, Loader } from 'components'
import { Box, Container, Flex, Grid } from '@chakra-ui/react'

const Component: React.FC<LayoutProps> = function ({ element }) {
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    document.body.removeAttribute('style')
    updateLoading(false)
  }, [])

  return (
    <Fragment>
      {loading && <Loader />}
      <Flex
        w="100%"
        minH="100vh"
        flexDir="column"
        justifyContent="flex-start"
        pos="relative"
        bgColor="inherit"
        color="mauve.100"
        fontSize="16px"
        fontWeight="normal"
        fontStyle="normal"
      >
        <Header />
        <Grid w="100%" flex={1} pos="relative" bg="inherit">
          <Container px={{ base: 0, md: '16px' }}>
            <Grid w="100%" minH="100%" templateColumns={{ md: '1fr 2fr 1fr' }}>
              <Box />
              <Box
                h="calc(100% + 1px)"
                bg="mauve.1200"
                borderLeft={{ lg: '1px solid' }}
                borderRight={{ lg: '1px solid' }}
                borderColor={{ lg: 'mauve.1000' }}
                pos="relative"
                px="18px"
                as="main"
              >
                {element}
              </Box>
              <Box />
            </Grid>
          </Container>
        </Grid>
      </Flex>
    </Fragment>
  )
}

export default Component
