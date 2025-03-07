import {type ReactNode } from "react";
import { Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { links } from "./links";
import ClientLayout from "~/components/ClientLayout";

interface LayoutProps {
  children: ReactNode;
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
        <ClientLayout>
          {children}          
        </ClientLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
