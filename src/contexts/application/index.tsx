import type { ApplicationContextProps, ApplicationProviderProps } from './type'
import React, { createContext, useContext } from 'react'

import { useMediaQuery } from '@chakra-ui/react'

const DEFAULT = {
  breakpoint: {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
    xxxl: false,
  },
}

const Context = createContext<ApplicationContextProps>(DEFAULT)
const Provider: React.FC<ApplicationProviderProps> = function ({ children }) {
  const [sm] = useMediaQuery('(min-width: 480px)')
  const [md] = useMediaQuery('(min-width: 768px)')
  const [lg] = useMediaQuery('(min-width: 992px)')
  const [xl] = useMediaQuery('(min-width: 1280px)')
  const [xxl] = useMediaQuery('(min-width: 1536px)')
  const [xxxl] = useMediaQuery('(min-width: 1792px)')

  return (
    <Context.Provider
      value={{
        breakpoint: {
          sm,
          md,
          lg,
          xl,
          xxl,
          xxxl,
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider

export function useApplicationContext() {
  const context = useContext<ApplicationContextProps>(Context)
  if (context === undefined)
    throw new Error('useApplicationContext must be used within a ApplicationContextProvider')
  return context
}
