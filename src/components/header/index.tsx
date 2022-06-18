import React from 'react'

import Action from './action'
import { Box, Container, Flex, Grid, Heading } from '@chakra-ui/react'

const Component: React.FC = function () {
  return (
    <Box w="100%" h="56px" display="block" pos="relative" bg="mauve.1200" as="header">
      <Container h="100%" pos="relative">
        <Grid
          h="100%"
          templateColumns={{
            base: '1fr',
            lg: '1fr 2fr 1fr',
          }}
          templateRows="1fr"
          pos="relative"
        >
          <Action />
          <Box
            h="100%"
            bg="mauve.1200"
            borderLeft={{ lg: '1px solid' }}
            borderRight={{ lg: '1px solid' }}
            borderColor={{ lg: 'mauve.1000' }}
            pos="relative"
            px="18px"
          >
            <Flex
              h="100%"
              flexFlow="row nowrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading fontSize="20px" fontWeight="semibold" as="h2">
                Início
              </Heading>
            </Flex>
          </Box>
          <Box />
        </Grid>
      </Container>
    </Box>
  )
}

export default Component
