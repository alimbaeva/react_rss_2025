import { type ReactNode } from 'react'
import { Meta, Links, ScrollRestoration, Scripts } from 'react-router'
import Header from './components/header/Header'
import './app.css'
import Footer from './components/footer/Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
