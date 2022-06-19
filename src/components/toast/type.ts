import type { BoxProps, FlexProps } from '@chakra-ui/react'

type Status = 'success' | 'warn' | 'error' | 'info'
export type ToastProps = {
  title: string
  status?: Status
}

export type ToastThemeObject = {
  [key in Status | 'default']: {
    icon?: React.ReactNode
    container: FlexProps
    children: BoxProps
  }
}
