import React, { useState } from 'react'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import theme from 'theme'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
