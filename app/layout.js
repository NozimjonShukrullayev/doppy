import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'AI Career Coach',
	description: 'Doppy - AI Career Coach. Get your dream job with Doppy.',
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
		>
			<html lang='en' suppressHydrationWarning>
				<head>
					<link rel='icon' href='/logo-single.png' sizes='any' />
				</head>

				<body className={`${inter.className}`}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						<Fragment>
							<main className='min-h-screen'>{children}</main>
							<Toaster richColors />
						</Fragment>
						<Footer />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
