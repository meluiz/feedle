import { ReactNode } from 'react'

export type ApplicationContextProps = {
  breakpoint: {
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean
    xxl: boolean
    xxxl: boolean
  }
}

export type ApplicationProviderProps = {
  children: ReactNode
}
