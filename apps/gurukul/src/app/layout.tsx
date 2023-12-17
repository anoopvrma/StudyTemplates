import type { Metadata } from 'next'

import ThemeRegistry from '@/theme/ThemeRegistry';

import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css'
import ResponsiveAppBar from '@/components/header/ResponsiveAppBar';
import Footer from '@/components/footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Box from '@mui/material/Box';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gurukul Web Template',
  description: 'Free Template for School/College websites by StudyMinutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <ResponsiveAppBar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                mt: { xs: 12, md: 21 }
              }}>
              {children}
            </Box>
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
