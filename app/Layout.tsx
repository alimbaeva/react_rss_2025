import { type ReactNode } from 'react'
import { Meta, Links, ScrollRestoration, Scripts, Link } from 'react-router'

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
        <header>
        хедер
        </header>
        {children}
        <footer>ffff</footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
