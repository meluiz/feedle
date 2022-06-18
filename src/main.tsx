import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { ApplicationContextProvider } from 'contexts'
import { BrowserRouter } from 'react-router-dom'

import { ChakraTheme } from 'themes'

import Application from 'src/__app'

ReactDOM.createRoot(document.getElementById('__feedle')!).render(
  <React.StrictMode>
    <ChakraProvider theme={ChakraTheme}>
      <ApplicationContextProvider>
        <BrowserRouter>
          <Application />
        </BrowserRouter>
      </ApplicationContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
