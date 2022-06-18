import type { LayoutProps } from './type'
import React, { Fragment, useEffect, useState } from 'react'

import { Loader } from 'components'
import { Flex } from '@chakra-ui/react'

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
        alignItems="flex-start"
        justifyContent="flex-start"
        pos="relative"
        bgColor="inherit"
        color="mauve.100"
        fontSize="16px"
        fontWeight="normal"
        fontStyle="normal"
      >
        {element}
      </Flex>
    </Fragment>
  )
}

export default Component
